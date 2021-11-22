const { GraphQLNonNull, GraphQLObjectType, GraphQLSchema,  GraphQLString } = require('graphql');
const pgdb = require('../database/pgdb');
const MeType = require('./types/me');

// The root query type is where in the data graph we can start asking questions
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        me: {
            type: MeType,
            description: 'The current user identified by an api key',
            args: {
                key: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args, { pgPool }) => {
                return pgdb(pgPool).getUser(args.key);
            }
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: RootQueryType,
    // mutation: ...
});

module.exports = ncSchema;
