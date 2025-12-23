const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const {checkDatabaseConnection} = require("./middlewares/databaseConnectionCheckMiddleware")

dotenv.config({path: "./env"});

const app = express();

app.use(express.urlencoded({ extended : true }))
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to the mongodb");

        app.listen(8000, () => {
            console.log("Express server started at port 8000")
        })
    })
    .catch((error) => {
        console.error("Failed to connect to the backend server:", error);
    })


mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB");
})

mongoose.connection.on("error", (error) => {
    console.log("Mongoose connection error:", error);
})

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected to the database");
})