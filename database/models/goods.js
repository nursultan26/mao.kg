module.exports = (sequelize, type) => {
  return sequelize.define('Good', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ext_id: {
      type: type.INTEGER,
      allowNull: false
    },
    categoty: type.STRING,
    sub_category: type.STRING,
    subsub_category: type.STRING,
    title: type.STRING,
    firm: type.STRING,
    made_in: type.STRING,
    size: type.STRING,
    articul: type.STRING,
    price: type.INTEGER,
    oldPrice: type.INTEGER,
    img: type.STRING,
    quantity: type.INTEGER,
    sales: type.INTEGER,
    color: type.STRING
  })
}