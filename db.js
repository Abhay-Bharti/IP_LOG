const { connect } = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_DB_URI;
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