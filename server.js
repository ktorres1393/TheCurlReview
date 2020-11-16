const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

const port = 3000;

const indexRouter = require('./routes/index');

const app = express();

require('./config/database');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false})); 
app.use(express.static('public')); 
app.use(methodOverride('_method'));

app.use('/', indexRouter);

app.listen(port, function(){
    console.log(`Express is listening on ${port}`)
})