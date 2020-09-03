const route = require('express').Router()
const Controller = require('../controllers/controller')
const UserController = require('../controllers/UserController')

route.post('/login', UserController.login)
route.post('/register', UserController.register)

route.get('/reviews', Controller.getReviews)
route.post('/reviews', Controller.addReview)
route.put('/reviews/:id', Controller.editReview)
route.delete('/reviews/:id', Controller.deleteReview)

// route.get('/api1', ApiController.api1)
// dst

module.exports = route