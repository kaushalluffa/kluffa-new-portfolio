import { gql, GraphQLClient } from 'graphql-request';

export default new GraphQLClient(import.meta.env.VITE_GRAPHCMS_ENDPOINT);

export { gql };
