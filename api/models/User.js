import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserModelSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  monthlyEarnings: {
    type: Number,
    default: 0,
    min: 0,
  },
  desiredMonthlySavings: {
    type: Number,
    default: 0,
    min: 0,
  },
  dailyExpenses: {
    type: Array,
    default: [],
  },
});

const UserModel = mongoose.model('UserModel', UserModelSchema);
export default UserModel;
