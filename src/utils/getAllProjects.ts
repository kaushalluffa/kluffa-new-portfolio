import { gql } from 'graphql-request';
import hygraphClient from './hygraph-client';

export default async function getAllProject() {
  const query = gql`
    query AllProjects {
      projects {
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
    const response = await hygraphClient.request(query);
    return response;
  } catch (error) {
    return error;
  }
}
