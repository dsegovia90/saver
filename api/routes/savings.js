import graphqlHTTP from'express-graphql';
import { buildSchema } from 'graphql';
import UserModel from '../models/User';


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => {
    return 'Hello';
  },
};

export default graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});
