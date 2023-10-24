const jwt = require("jsonwebtoken");

const generateAccessToken = (id) =>{
    const token = jwt.sign({id : id}, "secretKey", {
        expiresIn:'1d',
    });
    return token;
};

const generateRefreshToken = (id) =>{
    const token = jwt.sign({id : id}, "secretKey", {
        expiresIn:'1y',
    });
    return token;
}

module.exports = {generateAccessToken, generateRefreshToken};