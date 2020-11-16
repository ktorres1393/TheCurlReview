const mongoose = require('mongoose');

const db = mongoose.connection;

const connectionURI = 'mongodb+srv://admin:abc1234@sei.1nu7i.mongodb.net/the-curl-review?retryWrites=true&w=majority'

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});