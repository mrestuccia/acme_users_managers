const conn = require('./conn.js');

const Users = conn.define('User', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  },
  isManager: {
    type: conn.Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
    hooks: {
      beforeUpdate: function (user) {
        if (user.isManager === false) {
          Users.update({ managerId: null }, { where: { managerId: user.id } })
        }
      }
    }
  }
)

module.exports = Users;