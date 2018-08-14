const Sequelize = require('sequelize')
const basket_Model = require('./models/basket')
const category_1_Model = require('./models/category_1')
const category_2_Model = require('./models/category_2')
const category_3_Model = require('./models/category_3')
const ext_prod_id_Model = require('./models/ext_prod_id')
const firms_Model = require('./models/firms')
const goods_Model = require('./models/goods')
const made_in_Model = require('./models/made_in')
const orders_Model = require('./models/orders')
const size_Model = require('./models/size')
const users_Model = require('./models/users')
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

const Basket = basket_Model(sequelize, Sequelize)
const Category_1 = category_1_Model(sequelize, Sequelize)
const Category_2 = category_2_Model(sequelize, Sequelize)
const Category_3 = category_3_Model(sequelize, Sequelize)
const Ext_prod_id = ext_prod_id_Model(sequelize, Sequelize)
const Firms = firms_Model(sequelize, Sequelize)
const Made_in = goods_Model(sequelize, Sequelize)
const Orders = made_in_Model(sequelize, Sequelize)
const Goods = orders_Model(sequelize, Sequelize)
const Size = users_Model(sequelize, Sequelize)
const Users = goods_Model(sequelize, Sequelize)


sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Basket,
  Category_1,
  Category_2,
  Category_3,
  Ext_prod_id,
  Firms,
  Made_in,
  Orders,
  Goods,
  Size,
  Users
}
