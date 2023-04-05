const jwt = require('jsonwebtoken')

const authenticaticate = (req, res, next) => {
    const authHeader = req.headers["autherization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === null || token === undefined) {
        return res.status(401).json({ msg: "Unautherized User" });
    } else {
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if (err) {
                return res.status(401).json({ msg: "Unautherized User" });
            } else {
                req.user = user;
                next();
            }
        });
    }
};

module.exports = {authenticaticate}