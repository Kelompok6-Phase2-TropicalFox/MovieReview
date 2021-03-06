const route = require('express').Router()
const Controller = require('../controllers/controller')
const UserController = require('../controllers/UserController')
const MovieGlue = require('../controllers/MovieGlue')
const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')

route.post('/login', UserController.login)
route.post('/register', UserController.register)

route.get('/reviews', authentication, Controller.getReviews)
route.post('/reviews', authentication, authorization, Controller.addReview)

route.get('/reviews/:id', authentication, Controller.getById)
route.put('/reviews/:id', authentication, authorization, Controller.editReview)
route.delete('/reviews/:id', authentication, authorization, Controller.deleteReview)

route.get('/movieglue', MovieGlue.get)
// route.get('/api1', ApiController.api1)
// dst

module.exports = route