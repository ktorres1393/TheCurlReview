// (optional) require the model
const Product = require('../models/product');
// set up module.exports
module.exports = {
    index,
    new: newProduct,
    create,
    delete: deleteProduct,
    edit,
    update,
    show
};
// define our controller actions
function index(req, res) {
    Product.find({}, function(err, products) {
        res.render('products/index', { products })
    });
}

function newProduct(req, res){
    res.render('products/new');
}

function create(req, res){
    Product.create(req.body, function(err, product){
        res.redirect('/products')
    })
}
function deleteProduct(req, res){
    Product.findByIdAndDelete(req.params.id, function(err, deletedProducts){
        res.redirect('/products');
    })
}

function edit(req, res) {
    Product.findById(req.params.id, function(err, product){
        res.render('products/edit', { product });

    })
}

function update(req, res){
   Product.findByIdAndUpdate(req.params.id, req.body, function(err, updatedProduct){
       res.redirect('/products');
   }) 
}

function show(req, res){
    Product.findById(req.params.id, function(err, product) {
        res.render('products/show', { product })
    })
}