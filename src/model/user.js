const mongoose = require("mongoose");

const users = mongoose.Schema({
    username: String,
    password: String,
});

const user = mongoose.model("user" , users);

module.exports = user;