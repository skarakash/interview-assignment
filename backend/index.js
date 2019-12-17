const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

routes(app);

const port = 3999;
const startServer = () => {
    app.listen(port);
    console.log(`App started on port ${port}`)
};

const connectDb = () => {
    mongoose.Promise = require('bluebird');
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect('mongodb+srv://skarakash:highbury@handballstats-rylsw.mongodb.net/test?retryWrites=true&w=majority', options);
    return mongoose.connection;
};


connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);
