// module.exports
module.exports = {
    index,
};

//define our controller actions
function index(req, res){
    res.render('index.ejs');
}