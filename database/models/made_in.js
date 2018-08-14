module.exports = (sequelize, type) => {
  return sequelize.define('Made_in', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    country: type.STRING
  })
}