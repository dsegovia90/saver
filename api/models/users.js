const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  monthly_earnings: Number,
  desired_monthly_savings: Number,
  daily_expenses: Array,
})

const UserModel = mongoose.model('UserModel', UserModelSchema);
module.exports = UserModel;