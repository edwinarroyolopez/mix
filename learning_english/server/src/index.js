import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
/* graphql */
import typeDefs from './schema/typedefs';
import resolvers from './schema/resolvers';
/* mongodb models */
import User from './models/User';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

/* settings */
app.set('port', process.env.PORT || 7000);

const server = new ApolloServer({
  schema,
  context: { User },
  playground: { endpoint:'/graphql', settings:{'editor.theme':'light'} }
});

server.applyMiddleware( { app } );

/* mongoose connection */
mongoose.connect('mongodb://localhost/learning-english',{useNewUrlParser:true}).then(
  () => {
    console.log('mongodb connected');
    app.listen( app.get('port'), () =>{
      console.log(`🚀 Server ready at http://localhost:${app.get('port')}${server.graphqlPath}`);
    });
  }).catch(err => console.log(err));
