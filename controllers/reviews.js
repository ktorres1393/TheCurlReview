const product = require('../models/product');


module.exports = {
 create
};

function create(req, res){
    product.findById(req.params.id, function(err, product){
        product.reviews.push(req.body);
        product.save(function(err){
            res.redirect(`/products/${product._id}`)
        })
    })
}