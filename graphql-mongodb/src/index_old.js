/*
    server
*/

import express from 'express';
const app = express();

/* mongodb */
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphql-test')
.then(() => console.log('mongod connected'))
.catch(err => console.log(err));

/* Mongodb Models */
import Car from './models/Car';

/* graphql */
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

/* settings */
app.set('port', process.env.PORT || 3000); /* Si en el SO no han definido un puerto use el 3000, de lo contrario use el puerto del SO */

/* typeDefs, ¿Còmo van a lucir mis datos?*/
/* resolvers, Métodos */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

/* Routes graphql */
app.use('/graphql', express.json(), graphqlExpress({
  schema,
  context: {
    Car
  }
}));

/* start the server */
app.listen( app.get('port'),() => {
  console.log('Server on port 3000');
});
