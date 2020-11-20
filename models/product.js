// require mongoose
const mongoose = require('mongoose')

//create a shortcut for Schema
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    hairType: {
        type: String
    }
}, {timestamps: true});

//create a productSchema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    reviews: [ reviewSchema ]

}, { timestamps: true });



//export the result of compiling our schema into model
module.exports = mongoose.model('Product', productSchema);