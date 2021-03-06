const jwt = require ("jsonwebtoken")
const secret = process.env.SECRET

const generateToken = (data) => {
    let access_token = jwt.sign ({
        email : data.email,
        id : data.id
    }, secret);
    return access_token
}

const verifyToken = (data) => {
    return jwt.verify (data, secret)
}



module.exports = {generateToken, verifyToken}