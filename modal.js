const { model, Schema } = require('mongoose');

const ipSchema = new Schema({
    ip: { type: String },
    timestamp: { type: Date, default: Date.now },
});

const IP = model("IP", ipSchema);

module.exports = IP;