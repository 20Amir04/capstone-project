const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    number: String,
});

module.exports = mongoose.model("Post", Post);