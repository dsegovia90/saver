import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import UserModel from '../models/User';


const schema = buildSchema(`
  type Query {
    users(user_name: String): [User]
  },
  type User {
    user_name: String,
    monthly_earnings: Float,
    desired_monthly_savings: Float
  }
`);

const getUsers = args => UserModel.find(args)
  .then((data) => {
    console.log(data);
    return data;
  });

const rootValue = {
  users: getUsers,
};

export default graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
