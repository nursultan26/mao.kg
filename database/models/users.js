module.exports = (sequelize, type) => {
  return sequelize.define('User', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type:type.STRING,
      alowNull: false
    },
    name: {
      type:type.STRING,
      alowNull: false
    },
    lastname: {
      type:type.STRING,
      alowNull: false
    },
    email: {
      type:type.STRING,
      alowNull: false
    },
    phone: type.STRING,
    card: type.STRING,
    img:type.STRING
  })
}