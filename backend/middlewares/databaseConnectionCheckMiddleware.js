const mongoose = require("mongoose")

const checkDatabaseConnection = async (req, res, next) => {
    if (mongoose.connection.readyState === 1) {
        next();
    }
    else {
        res.status(500).json({error: "Database connection not established."})
    }
}

module.exports = {checkDatabaseConnection}