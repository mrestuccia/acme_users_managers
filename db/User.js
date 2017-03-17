const conn = require('./conn.js');

const Users = conn.define('User',{
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  }
})