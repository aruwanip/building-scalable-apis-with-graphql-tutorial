const { GraphQLInt, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'TotalVotes',
    fields: () => ({
        up: { type: GraphQLInt },
        down: { type: GraphQLInt }
    })
})
