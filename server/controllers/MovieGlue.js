const axios = require('axios')

class MovieGlue{

static get(req, res, next){
axios({
    method: 'GET',
    url: 'https://api-gate2.movieglu.com/filmsNowShowing/?n=10',
    headers: {
      "api-version": "v200",
      "Authorization": process.env.Auth,
      "client": process.env.client,
      "x-api-key": process.env.x-api-key,
      "device-datetime": "2020-06-18T12:07:57.296Z",
      "territory": "UK",
    }
  })
      .then(data =>{
          return res.status(200).json({data})
      })
      
      .catch(err => {
          return res.status(400).json({message: "Error"})
      })
    }
}

module.exports = MovieGlue