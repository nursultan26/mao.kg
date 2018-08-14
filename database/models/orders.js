module.exports = (sequelize, type) => {
  return sequelize.define('Order', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    prod_ext_id: type.INTEGER,
    prod_title: type.STRING,
    quan: type.INTEGER,
    sum: type.INTEGER,
    status: type.STRING
  })
}