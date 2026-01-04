const jwt = require("jsonwebtoken")
const HttpException = require("../models/http-exception")

const authorizeAdmin = async (req, res, next) => {
    try {
        
        const token = req.cookies.auth_token;

        if (!token) {
            throw new HttpException(401, "Unauthorized User.")
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        role = decoded.role;

        if (!role || role !== "admin") {
            return res.status(403).json({ message : "Access denied"});
        }

        next();
    }
    catch(e) {
        return res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Internal Server Error"});
    }
}

module.exports = authorizeAdmin