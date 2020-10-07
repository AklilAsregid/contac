const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const { process } = require('@hapi/joi/lib/errors')

//configuring dot env to use varial just process.env.name of 
dotenv.config();

const db = "mongodb://localhost:27017/Auth"
    //mongo uri MONGO_URI
    //connect to Db
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then((con) => {
    console.log("connected to db")
}).catch(err => console.log(err))

//enabling cors
app.use(cors())

//enabling sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//middleware parsing body
app.use(express.json())
app.use(express.static('./public'))
app.use(express.static('./uploads'))
    //route Middlewares
app.use('/api/user', require('./server/routes/auth'))
app.use('/api/contact', require('./server/routes/contact'))

//handle Productin
if (true) {
    //static folder
    app.use(express.static(__dirname + '/server/public/'))

    //handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/server/public/index.html'))
}

//const port = process.env.PORT || 2000
const port = 2000;

app.listen(port, () => console.log(`Server started running on Port ${port}`))