const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    }
}, {timestamps: true})


module.exports = mongoose.model("User", userSchema)