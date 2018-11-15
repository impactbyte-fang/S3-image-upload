const models = require('../models')

exports.getAll = async (req, res) => {
  try {
    const users = await models.users.findAll()

    res.json({ users })
  } catch (err) {}
}

exports.createUser = (req, res) => {
  res.send('User')
}
