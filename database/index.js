const Sequelize = require('sequelize')
const prod_garmentsModel = require('./models/prod_garment')
const config = require('../config')

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

const Prod_garment = prod_garmentsModel(sequelize, Sequelize)


sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Prod_garment
}