module.exports = (sequelize, type) => {
  return sequelize.define('Category_3', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_3: type.STRING
  })
}