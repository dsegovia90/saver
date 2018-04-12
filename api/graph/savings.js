import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import UserModel from '../models/user';


const schema = buildSchema(`
  type Query {
    users(user_name: String): [User]
  },
  type Mutation {
    update_earnings(user_name: String, value: Float): User
  },
  type User {
    user_name: String,
    monthly_earnings: Float,
    desired_monthly_savings: Float
  }
`);

const getUsers = args => UserModel.find(args)
  .then(data => data)
  .catch(err => console.log(err));

const updateSettings = args => UserModel.findOne({ user_name: args.user_name })
  .then((data) => {
    const newData = data;
    newData.monthly_earnings = args.value;
    return newData.save();
  })
  .then(data => data)
  .catch(err => console.log(err));

const rootValue = {
  users: getUsers,
  update_settings: updateSettings,
};

export default graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
