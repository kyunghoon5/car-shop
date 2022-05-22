const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
    console.log('listening on 3000')
})
// app.set('view engine', 'ejs')

MongoClient.connect('mongodb+srv://aftab:1122@cluster0.hmxot.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('car-app')
        const carsCollection = db.collection('cars')
        const serviceCollection = db.collection('service')
        
        
        //.........................post

        app.post('/postservice', (req, res) => {
            serviceCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    // res.redirect('/')

                })
                .catch(error => console.error(error))
        })

        app.post('/postcars', (req, res) => {
            carsCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    // res.redirect('/')

                })
                .catch(error => console.error(error))
        })

        //.........................get
        app.get('/getcars', (req, res) => {
            db.collection('cars').find().toArray()
                .then((resu) => {
                    console.log(resu)
                    return res.json(resu);
                })
                .catch(error => console.error(error))
            // ...
        })

        app.get('/getservices', (req, res) => {
            db.collection('service').find().toArray()
                .then((resu) => {
                    console.log(resu)
                    return res.json(resu);
                })
                .catch(error => console.error(error))
            // ...
        })

        app.delete('/deleteservice', (req, res) => {
            // Handle delete event here
            serviceCollection.deleteOne(
                { id: req.body.id },
                options
              )
          })

    })

// All your handlers here...
// app.get('/', (req, res) => {/*...*/ })
// app.post('/quotes', (req, res) => {/*...*/ })