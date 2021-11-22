const { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Name',
    // Use function syntax due to cycling dependency of Name > User > Contest > Name
    fields: () => {
        const UserType = require('./user');
        return {
            id: { type: GraphQLID },
            label: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: GraphQLString },
            createdAt: { type: new GraphQLNonNull(GraphQLString) },
            createdBy: {
                type: new GraphQLNonNull(UserType),
                resolve(obj, args, { loaders }) {
                    return loaders.usersByIds.load(obj.createdBy);
                }
            }
        }
    }
});
