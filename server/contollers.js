const bcrypt = require('bcryptjs')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    
    //authentication contollers
    
    register: async (req, res) => {
       const {username, password} = req.body;
       const {session} = req;
       const db = req.app.get('db')
       let takeenUsername = await db.auth.check_username({username})
       takeenUsername = +takeenUsername[0].count;
       if(takeenUsername !== 0) {
           return res.sendStatus(409)
       }

       let salt = bcrypt.genSaltSync(10)
       let hash = bcrypt.hashSync(password, salt)
       let user = await db.auth.register({username, password: hash});
       user = user[0]
       session.user = user
       res.status(200).send(session.user)
     },
     login: async (req, res) => {
         const {username, password} = req.body;
         const {session} = req;
         const db = req.app.get('db')
         let user = await db.auth.login({username})
         user = user[0]
         if(!user) {
             
            return res.sendStatus(401);
         }
         let authenticated = bcrypt.compareSync(password, user.password)
         if(authenticated) {
             delete user.password;
             session.user = user
             res.status(200).send(session.user)
         } else {
             res.sendStatus(401)
         }
      },
      getUser: (req, res) => {
         const {user} = req.session;
         if(user) {
             res.status(200).send(user)
         } else {
             res.sendStatus(401)
         }
      },
      logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
      },
     
     //product controllers
     
      getAll: (req, res) => {
        const db = req.app.get('db')

        db.getAll_products().then(products => {
            res.status(200).send(products)
        })
    },

    getOne: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params

      db.get_product(id).then(product => {
          res.status(200).send(product)
      })
    },

    getProductsByCategory: (req, res) => {
       const db = req.app.get('db')
       const {category} = req.query;
       console.log(category)
       db.getAll_products_category([category]).then(response => {
           res.status(200).send(response)
       })
    },

    //cart controllers

    getCartProducts: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        db.getAllCart_for_user([id]).then(products => {
            res.status(200).send(products)
        })
    },
    
    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.body.product
        const {id} = req.session.user
        

        db.add_to_cart([product_id, id]).then(() => res.sendStatus(200))
    },

    deleteCart: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user;
        const {product_id} = req.params

        db.delete_from_cart([id, product_id]).then(products => res.status(200).send(products))
    },
    
    updateQuantity: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {product_id, quantity} = req.params
    

        db.update_quantity_cart([quantity, product_id, id]).then((products)=> res.status(200).send(products) )
    },

    // stripe payment checkout

    checkout: (req, res) => {
        const {amount, token:{id}} = req.body
        stripe.charges.create({
            source: id,
            amount, 
            currency: 'USD'
        },(err, charge) => {
            if(err) {
                return res.status(200).send(err)
            } else {
                return res.status(200).send(charge)
            }
        });


    }
}
