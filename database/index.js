const Sequelize = require('sequelize')
const config = require('../config')
var glob = require('glob')

const sequelize = new Sequelize(config.database, config.user, config.dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

var models = glob.sync(config.MODELS_URL);
var Models = {}

models.forEach(function(model) {
  let table = require(model)(sequelize, Sequelize)
  Models[table.name] = table
})

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Models
}
