const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewPostSchema = new Schema ({
    name: String,
    yourTilte: String,
    idReview: String,
    image: String,
    body: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const ReviewPost = mongoose.model('ReviewPost', ReviewPostSchema);
module.exports = ReviewPost;