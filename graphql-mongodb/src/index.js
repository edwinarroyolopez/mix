import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
/* graphql */
import typeDefs from './schema';
import resolvers from './resolvers';
/* mongodb models */
import Car from './models/Car';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
/* settings */
app.set('port', process.env.PORT || 3000);

const server = new ApolloServer({
  schema,
  context: { Car },
  playground:{endpoint:'/graphql',settings:{'editor.theme':'light'}}
});

server.applyMiddleware({ app });

/* mongodb connection */
mongoose.connect('mongodb://localhost/graphql-test',{useNewUrlParser:true}).then(
  () => {
    console.log('mongod connected');
    /* start the server */
    app.listen( app.get('port'),() => {
      console.log(`🚀 Server ready at http://localhost:${app.get('port')}${server.graphqlPath}`)
    });

}).catch(err => console.log(err));
