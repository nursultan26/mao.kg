module.exports = (sequelize, type) => {
  return sequelize.define('Category_1', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_1: type.STRING
  })
}