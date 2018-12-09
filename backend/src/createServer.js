const {GraphQLServer} = require('graphql-yoga');

const query = require('./resolvers/Query');
const mutation = require('./resolvers/Mutation');
const db = require('./db');

// create graphql yoga server

function createServer(){
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation, 
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({...req, db}),
    });
}

module.exports = createServer;