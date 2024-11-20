const mongoose = require('mongoose')
//we will be referencing schema a lot once we get to relationships 
const Schema = mongoose.Schema; // just to shorten our code 

const SlaygroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
})

module.exports = mongoose.model('Slayground', SlaygroundSchema); 