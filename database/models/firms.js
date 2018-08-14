module.exports = (sequelize, type) => {
  return sequelize.define('Firm', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firm: type.STRING
  })
}