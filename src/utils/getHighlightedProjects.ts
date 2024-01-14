import { gql } from 'graphql-request';
import hygraphClient from './hygraph-client';

export default async function getHighlightedProjects() {
  const query = gql`
    query GetHighlightedProjects {
      highlights {
        id
        isActive
        isDeployed
        projectCover {
          url
        }
        projectDemoVideoUrl
        projectDeployedVersion
        projectDescription
        projectGithubLink
        projectLastUpdated
        projectThumbnail {
          url
        }
        projectTitle
        projectVideo {
          url
        }
        stack
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
