const mongoose = require('mongoose');

const db = mongoose.connection;

const connectionURI = process.env.MONGODB_URI

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});