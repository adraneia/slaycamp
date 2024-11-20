const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const Slayground = require('./models/slayground');

// updated version no longer needs all that crap
mongoose.connect('mongodb://localhost:27017/yelp-slay',{
    // useNewUrlParser:true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
});

//the logic to check if there is an error 
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", () => {
    console.log("Database connected")
});

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    //res.send('Helloo from yelp camp ^__^')
    res.render('home')
})

app.get('/makeslayground', async (req, res) => {
    //res.send('Helloo from yelp camp ^__^')
    //res.render('home')
    const slay = new Slayground({ title: 'My backyard', description: 'cheap slaying!' });
    await slay.save(); 
    res.send(slay)
})
app.listen(3000, () => {
    console.log('serving on port 3000')
})