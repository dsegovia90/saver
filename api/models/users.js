const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  user_name: String,
  monthly_earnings: Number,
  desired_monthly_savings: Number,
})

const UserModel = mongoose.model('UserModel', UserModelSchema);
module.exports = UserModel;