const { connect } = require("mongoose");
const MONGO_URL = "mongodb+srv://abhaybharti2123:Abhay0192@cluster0.n7mwa7p.mongodb.net";
const DB_NAME = "Ip-info";

const connectDb = async () => {
    try {
        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log("Database Connected Successfully");
    } catch (err) {
        console.error(err);
    }
}

connectDb();

module.exports = {};