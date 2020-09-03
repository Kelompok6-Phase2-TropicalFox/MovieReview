const bcrypt = require ("bcryptjs")

const compare = (password, encodedPassword) => {
    let data = bcrypt.compareSync (password, encodedPassword)

    return data
}

module.exports = {compare}