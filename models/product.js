// require mongoose
const mongoose = require('mongoose')

//create a shortcut for Schema
const Schema = mongoose.Schema;

//create a productSchema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    website: String,

}, { timestamps: true });

//export the result of compiling our schema into model
module.exports = mongoose.model('Product', productSchema);