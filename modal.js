const {model, Schema} = require('mongoose');

const ipSchema  = new Schema({
    ip: {
        type: String,
    }
}, {timestamps: true});

const IP = model("IP" , ipSchema );

module.exports = IP;