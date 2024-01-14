import { gql } from 'graphql-request';
import hygraphClient from './hygraph-client';

export default async function getOneProject(id: string) {
  const query = gql`
    query GetOneProject($id: ID) {
      project(where: { id: $id }) {
        id
        isActive
        isDeployed
        projectDemoVideoUrl
        projectDeployedVersion
        projectDescription
        projectGithubLink
        projectLastUpdated
        projectTitle
        stack
        publishedAt
        projectThumbnail {
          url
        }
        projectVideo {
          url
        }
        projectCover {
          url
        }
      }
    }
  `;
  try {
    const response = await hygraphClient.request(query, { id });
    return response;
  } catch (error) {
    return error;
  }
}
