// const humps = require('humps');

module.exports = {
    nodeEnv: process.env.NODE_ENV || 'development',

    // fromSnakeCase(GraphQLType) {
    //     return {
    //         type: GraphQLType,
    //         resolve: (parent, args, context, { fieldName }) => {
    //             return parent[humps.decamelize(fieldName)];
    //         }
    //     };
    // }
};
