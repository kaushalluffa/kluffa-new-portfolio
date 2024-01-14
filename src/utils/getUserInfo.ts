import { gql } from 'graphql-request';
import hygraphClient from './hygraph-client';

export default async function getUserInfo() {
  const query = gql`
    query MyQuery {
      developers {
        githubUrl
        id
        linkedinUrl
        name
        profileDescription
        publishedAt
        updatedAt
        email
        extraGithubUrl
        stack
        shortDesc
      }
    }
  `;
  try {
    const response = await hygraphClient.request(query);
    return response;
  } catch (error) {
    return error;
  }
}
