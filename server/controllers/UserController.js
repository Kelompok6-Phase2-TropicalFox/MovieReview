const bcrypt = require ("bcryptjs")
const {User} = require ("../models")

const {generateToken} = require ("../helpers/jwt.js")
const {compare} = require ("../helpers/bcrypt.js")

class UserController {
    static login(req,res) {
        let {email, password} = req.body

        User.findOne ({
            where : {email}
        })

        .then (data => {
            if (!data) {
                return res.status (400).json ({message : "Email or Password is Invalid"})
            }
        })
        return data

        .then (data => {
            const validation = compare  (password, data.password)

            if (validation) {
                let payLoad = {id : data.id, email : data.email}

                let access_token = generateToken (payLoad)

                return res.status (200).json ({access_token})
            } else {
                return res.status (400).json ({message : "Email or Password is Invalid"})
            }
        })

        .catch (err => {
            return res.status (500).json ({message : "Internal Server Error"})
        })
    }

    static register(req,res) {
        let params = {
            email : req.body.email,
            password : req.body.password
        }

        User.create (params)

        .then (data => {
            return res.status (201).json (data)
        })

        .catch (err => {
            return res.status (500).json ({message : "Internal Server Error"})
        })
        
    }
}

module.exports = UserController