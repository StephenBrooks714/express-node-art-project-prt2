const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FeaturePostSchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    priceUrl: String,
    price: String,
    feature: Array,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const FeaturePost = mongoose.model('FeaturePost', FeaturePostSchema);
module.exports = FeaturePost;