const { model, Schema} = require('mongoose');

const UsersSchema = new Schema({
    username: String,
    password: String,
    email: String
});
const Users = model('Users', UsersSchema);
module.exports = Users;