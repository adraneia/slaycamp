//we run this every time we want to seed our db (Not that often , when we make changes to the model or data)
const mongoose = require('mongoose')
const cities = require('./cities')
const {places,descriptors} = require('./seedHelpers')
const Slayground = require('../models/slayground');


mongoose.connect('mongodb://localhost:27017/yelp-slay',{});

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", () => {
    console.log("Database connected")
});

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Slayground.deleteMany({});
    // const c = new Slayground({title: 'purple field'});
    // await c.save();
    for (let i = 0; i < 50; i++){
        random1000 = Math.floor(Math.random() * 1000)
        const slay = new Slayground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)}, ${sample(places)}`    
        })
        await slay.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})
