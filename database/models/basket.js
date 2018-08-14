module.exports = (sequelize, type) => {
  return sequelize.define('Basket', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    prod_ext_id: type.INTEGER,
    user_id: type.INTEGER
  })
}