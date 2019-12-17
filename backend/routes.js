const Post = require('./models/post');

module.exports = app => {
    app.get('/', (req,res) => {
        res.json('ok')
    });

    app.get('/posts', (req, res) => {
        const query = Post.find();
        const promise = query.exec();
        promise
            .then(data => {
                res.json(data)
             })
            .catch(error => {
                console.error(error);
                    res.json(error)
            })
    });

    app.delete('/delete/:id', (req, res) => {
        const query = Post.deleteOne({ '_id': req.params.id });
        const promise = query.exec();
        promise
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                console.error(error);
                res.json(error)
            })
    });


    app.get('/getpost/:id', (req, res) => {
        const query = Post.findOne({ '_id': req.params.id });
        const promise = query.exec();
        promise
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                console.error(error);
                res.json(error)
            })
    });


    app.put('/updatepost', (req, res) => {
        const query = Post.updateOne({ '_id': req.body.id }, { $set: {'description': req.body.text }});
        const promise = query.exec();
        promise
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                console.error(error);
                res.json(error)
            })
    })
};