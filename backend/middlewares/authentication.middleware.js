const jwt = require("jsonwebtoken")

const authenticateUser = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      throw new HttpException(401, "Not authenticated");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      userId: decoded.userId,
      role: decoded.role
    };

    next();
  }
  catch (e) {
    return res
      .status(401)
      .json({ e: "Authentication failed" });
  }
};

module.exports = authenticateUser