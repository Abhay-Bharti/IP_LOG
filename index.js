const express = require('express');
const fs = require('fs');
const path = require('path');
require('./db.js');
const IP = require("./modal.js");

const app = express();
require('dotenv').config();

app.use(async (req, res, next) => {
    const visitorIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const logEntry = new IP({
        ip: visitorIP,
    });

    await logEntry.save()
        .then(() => {
            console.log(`Logged IP: ${visitorIP}`);
        })
        .catch((err) => {
            console.error('Error logging IP:', err);
        });
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"));
});



app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
});