const {Review} = require('../models/index')

class Controller {
    static getReviews(req,res) {
        Review.findAll()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
    }
    
    static getById(req,res) {
        Review.findOne({where:{id: req.params.id}})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
    }

    static addReview(req,res) {
        let params = {
            title: req.body.title,
            imdb_link: req.body.imdb_link,
            review: req.body.review,
            // UserId: req.body.UserId
            UserId : req.UserData.id

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
            // UserId: req.userData.id
        }
        // Review.update({where:{id: req.params.id}})
        Review.update(params,{where:{id: req.params.id}})
        // .then(result => res.status(201).json(result))
        .then (data => {
            if (!data) {
                return res.status (400).json ({message : "Bad Request"})
            } else {
                // return res.status (200).json ({message : "Successfully editing review"})
                return res.status (200).json (data)
            }
        })
        .catch(err => res.status(400).json(err))
    }
    static deleteReview(req,res) {
        Review.destroy({where:{id: req.params.id}})
        .then(result => res.status(200).json({msg:'successfully deleted'}))
        .catch(err => res.status(400).json(err))
    }
}

module.exports = Controller