module.exports = (sequelize, type) => {
    return sequelize.define('Product', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        articul: type.INTEGER,
        madeIn: type.TEXT,
        size: type.STRING,
        price: type.INTEGER,
        oldPrice: type.INTEGER,
        img: type.BLOB

    })
}