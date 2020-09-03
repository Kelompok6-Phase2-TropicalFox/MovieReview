const {User} = require ("../models")

const authorization = (req, res, next) => {
    const {id} = req.params

    User.findByPk (id)

    .then (data => {
        if (data && data.UserId === req.UserData.id ) {
            next ()
        } else {
            return res.status (403).json ({message : "Unauthorized Access"})
        }
    })

    .catch (err => {
        return res.status (403).json ({message : "Unauthorized Access"})
    })
}

module.exports = {authorization}