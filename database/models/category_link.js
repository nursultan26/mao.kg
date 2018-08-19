module.exports = (sequelize, type) => {
  return sequelize.define('Link_category', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cat1_id: type.STRING,
    cat2_id: type.STRING,
    cat3_id: type.STRING
  })
}