require('dotenv').config();
const express = require('express');
const app = express()
const massive = require('massive');
const session = require('express-session')
const ctrl = require('./contollers')

const pg= require('pg')
const pgSession = require('connect-pg-simple')(session)

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const pgPool = new pg.Pool({
    connectionString: CONNECTION_STRING
})

app.use(express.json());
app.use(session({
    store: new pgSession({
        pool: pgPool
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true, //look into values
    cookie: {
       maxAge: 100000000000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('You Are Connected To Database')

    app.listen(SERVER_PORT, ()=> console.log(`Making 💵  Money 💵  On Port: ${SERVER_PORT}`))
})

// authentication endpoints

app.post('/auth/register', ctrl.register)

app.post(`/auth/login`, ctrl. login) 

app.get('/api/current', ctrl.getUser)

app.post('/api/logout', ctrl.logout)
//product endpoints

app.get('/api/products', ctrl.getAll)

app.get('/api/product/:id', ctrl.getOne)

app.get('/api/cart/products', ctrl.getUserProducts)