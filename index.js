const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
require('dotenv').config();

app.use((req, res, next) => {
    const visitorIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const logMessage = `${visitorIP}\n`;

    const logFilePath = path.join(__dirname, 'visitor_ip.log');

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file', err);
        } else {
            console.log('IP logged:', logMessage.trim());
        }
    });

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
});
