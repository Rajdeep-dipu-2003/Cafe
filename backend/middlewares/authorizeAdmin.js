const User = require("../models/User.model");

const authorizeAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user || user.role !== "admin") {
            return res.status(403).json({ message : "Access denied"});
        }

        next();
    }
    catch(e) {
        return res.status(500).json({ error: "Internal Server Error"});
    }
}

module.exports = authorizeAdmin