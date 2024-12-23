const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Item = sequelize.define('Item', {
  name: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Item;
