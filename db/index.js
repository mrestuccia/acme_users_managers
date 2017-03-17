const conn = require('./conn');
const User = require('./User')

const sync = ()=> {
  return conn.sync();
}

module.exports = {
  sync,
  models:{
    User
  }
}