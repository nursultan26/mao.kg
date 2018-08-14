module.exports = (sequelize, type) => {
  return sequelize.define('Category_2', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   	category_2: type.STRING
  })
}