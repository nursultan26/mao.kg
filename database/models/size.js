module.exports = (sequelize, type) => {
  return sequelize.define('Size', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    size: type.STRING
  })
}