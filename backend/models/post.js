const mongoose = require('mongoose');

const postSchema =mongoose.Schema({
    type: String,
    description: String,
    data: Object,
    impacter_id: Number
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;