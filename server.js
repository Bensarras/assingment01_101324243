const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const employees = require('./models/Employee');
const users = require('./models/Users');


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const mongodb_atlas_url = "mongodb+srv://User:contrasena123@cluster1.qbnwblu.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority";

//TODO - Replace you Connection String here
mongoose.connect(mongodb_atlas_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});


// app.use(bodyParser.json());
// app.use('*', cors());
async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before
  const server = new ApolloServer({ typeDefs, resolvers });

  // Required logic for integrating with Express
  await server.start();

  const app = express();
  app.use(bodyParser.json());
  // app.use('*', cors());

  server.applyMiddleware({
     app,

     // By default, apollo-server hosts its GraphQL endpoint at the
     // server root. However, *other* Apollo Server packages host it at
     // /graphql. Optionally provide this to match apollo-server.
     path: '/'
  });

// const server = new ApolloServer({
//     typeDefs,
//     resolvers
//    });
// await server.start();
// const app = express();
// server.applyMiddleware({ app });

const mongodb_atlas_url = "mongodb+srv://User:contrasena1234@cluster1.qbnwblu.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority";

//TODO - Replace you Connection String here
// mongoose.connect(mongodb_atlas_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(success => {
//   console.log('Success Mongodb connection')
// }).catch(err => {
//   console.log('Error Mongodb connection')
// });


// app.use(bodyParser.json());
// app.use('*', cors());


// app.listen(3010, () => console.log('Now browse to localhost:3010/graphql'));








await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));