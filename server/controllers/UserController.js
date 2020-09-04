const {User} = require ("../models")

const {generateToken} = require ("../helpers/jwt.js")
const compare = require ("../helpers/bcrypt.js")


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
            return data
        })
        .then (data => {
            const validation = compare(password,data.password)
            if (validation) {
                let payLoad = {id : data.id, email : data.email}
                let access_token = generateToken(payLoad)
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
            console.log(err)
            return res.status (500).json ({message : "Internal Server Error"})
        })
    }

    static googleLogin(req, res, next){
        const client = new OAuth2Client(process.env.CLIENT_ID)
        const { google_access_token } = req.headers;
    
        let email_google = ''
    
        client.verifyIdToken({
          idToken:google_access_token,
          audience:process.env.CLIENT_ID
        })
        .then(ticket => {
          return ticket.getPayload()
        })
        .then(payload =>{
          email_google = payload.email;
          return User.findOne({where: payload.email})
        })
        .then(user =>{
          if(!user){
            let userObj = {
              email : email_google,
              password: "rahasia",
            }
          }else{
            return user;
          }
        })
        .then(data => {
          const payload = { email:data.email, id : data.id};
          const access_token = signToken(payload)
    
          return res.status(200).json({access_token})
        })
        .catch(err => {
          console.log(err);
        })
      }    
}

module.exports = UserController