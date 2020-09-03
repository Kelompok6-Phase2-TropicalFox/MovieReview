const {Review} = require('../models/index')

class Controller {
    static getReviews(req,res) {
        Review.findAll()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
    }
    static addReview(req,res) {
        let params = {
            title: req.body.title,
            imdb_link: req.body.imdb_link,
            review: req.body.review,
            UserId: req.body.UserId
        }
        Review.create(params)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err))
    }
    static editReview(req,res) {
        let params = {
            title: req.body.title,
            imdb_link: req.body.imdb_link,
            review: req.body.review,
            UserId: req.userData.id
        }
        Review.update({where:{id: req.params.id}})
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err))
    }
    static deleteReview(req,res) {
        Review.destroy({where:{id: req.params.id}})
        .then(result => res.status(200).json({msg:'successfully deleted'}))
        .catch(err => res.status(400).json(err))
    }
}

module.exports = Controller