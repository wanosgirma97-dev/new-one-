const { mongo } = require("mongoose");

module.exports ={
    mongoURI: process.env.DB_PRODUCTION,
}