import { gql, GraphQLClient } from 'graphql-request';

export default new GraphQLClient(import.meta.env.VITE_GRAPHCMS_ENDPOINT, { cache: 'only-if-cached' });

export { gql };
