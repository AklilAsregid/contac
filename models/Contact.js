const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    avatar: {
        type: String
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact