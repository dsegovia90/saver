import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  monthly_earnings: {
    type: Number,
    default: 0,
    min: 0
  },
  desired_monthly_savings: {
    type: Number,
    default: 0,
    min: 0
  },
  daily_expenses: {
    type: Array,
    default: []
  },
})

const UserModel = mongoose.model('UserModel', UserModelSchema);
export default UserModel;