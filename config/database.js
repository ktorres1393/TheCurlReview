const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});