const bcrypt = require('bcryptjs')

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
       console.log({before: session})
       session.user = user
       console.log({after: session})
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
         console.log(user.username)
         if(authenticated) {
             delete user.password;
             session.user = user
             res.status(200).send(session.user)
             console.log(1)
         } else {
             console.log(2)
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
        console.log('hit')
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
    }
}