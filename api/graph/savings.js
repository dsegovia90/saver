import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import UserModel from '../models/user';


const schema = buildSchema(`
  type Query {
    users(userName: String): [User]
  },
  type Mutation {
    updateSettings(
      userName: String,
      monthlyEarnings: Float,
      desiredMonthlySavings: Float): User
  },
  type User {
    userName: String,
    monthlyEarnings: Float,
    desiredMonthlySavings: Float
  }
`);

const users = args => UserModel.find(args)
  .then(data => data)
  .catch(err => console.log(err));

const updateSettings = args => UserModel.findOne({ userName: args.userName })
  .then((data) => {
    const updatedData = data;

    const incomingData = args;
    delete incomingData.userName;

    Object.assign(updatedData, args);
    return updatedData.save();
  })
  .catch(err => console.log(err));

const rootValue = {
  users,
  updateSettings,
};

export default graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
