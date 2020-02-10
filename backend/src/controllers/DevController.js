const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(request, response) {
    const devs = await Dev.find()

    return response.json(devs)
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body

    let dev = await Dev.findOne({ github_username })

    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

      const { name = login, avatar_url, bio } = apiResponse.data

      const techsArray = parseStringAsArray(techs)

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
    }

    return response.json(dev)
  },

  async update(request, response) {

    const { name, avatar_url, bio, techs, latitude, longitude } = request.body

    const idUser = request.params.id

    let dev = await Dev.findOne({ _id: idUser })

    const techsArray = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    if (dev) {
      dev = await Dev.update({
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
    }

    return response.json({ dev })
  },

  async destroy(request, response) {
    const idUser = request.params.id

    await Dev.deleteOne({ _id: idUser  })

    return response.json({ send: 'Success to delete' })
  }
}