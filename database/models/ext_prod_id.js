module.exports = (sequelize, type) => {
  return sequelize.define('Ext_prod_id', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
	})
}