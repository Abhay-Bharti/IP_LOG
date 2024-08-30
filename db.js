const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhaybharti2123:Abhay0192@cluster0.n7mwa7p.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });

const ipSchema = new mongoose.Schema({
    ip: String,
    timestamp: Date,
});

const IPLog = mongoose.model('IPLog', ipSchema);

app.use((req, res, next) => {
    const visitorIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const logEntry = new IPLog({
        ip: visitorIP,
        timestamp: new Date(),
    });

    logEntry.save()
        .then(() => console.log(`Logged IP: ${visitorIP}`))
        .catch((err) => console.error('Error logging IP:', err));

    next();
});
