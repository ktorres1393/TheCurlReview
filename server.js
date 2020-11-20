require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const MONGODB_URI =  process.env.MONGODB_URI;
const methodOverride = require('method-override');

const db = mongoose.connection;


// mongodb error / success ===============
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const reviewsRouter= require('./routes/reviews')
const aboutRouter= require('./routes/about')

const app = express();

require('./config/database');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false})); 
app.use(express.static('public')); 
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/', reviewsRouter);
app.use('/about', aboutRouter)

app.listen(port, function(){
    console.log(`Express is listening on ${port}`)
})