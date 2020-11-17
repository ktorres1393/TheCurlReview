//require model
const Product = require('../models/product');

//set up module.exports
module.exports = {
    index,
};

//define our controller actions

function index(req, res){
    Product.find({}, function(err, products){
        res.render('product/index.ejs', { products })
    });
}