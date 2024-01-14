/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Github from '../../assets/icons/Github';
import './style.scss';
import { AllProjects, Project } from '../../utils/types';

function ProjectsWrapper({ projects }: { projects: AllProjects }) {
  const navigate = useNavigate();
  const renderProjectCard = () => {
    if (projects && Array.isArray(projects) && projects?.length > 0) {
      return projects?.map((project: Project) => (
        <div key={project?.id} className="highlights__project-card" onClick={() => navigate(`/works/${project?.id}`)}>
          <div className="hightlights__project-card--img">
            <img
              src={project?.projectThumbnail?.url ?? 'https://i.ibb.co/80bKfpD/Img.png'}
              alt={project?.projectTitle ?? 'test demo'}
            />
          </div>
          <div className="highlights__project-card--info">
            <div className="info">
              <div className="info__heading">{project?.projectTitle ?? ''}</div>
              <div className="info__stack">
                <p className="info__stack--label">Stack</p>
                <p className="info__stack--tech">{project?.stack?.map((item) => item?.toUpperCase())?.join(', ')}</p>
              </div>
              <div className="info__stack">
                <p className="info__stack--label">Link</p>
                <div className="info__stack--tech">
                  {project?.projectDeployedVersion && (
                    <a
                      onClick={(e) => e.stopPropagation()}
                      href={project?.projectDeployedVersion ?? 'https://github.com/kaushalluffa'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                  {project?.projectGithubLink && (
                    <a
                      onClick={(e) => e.stopPropagation()}
                      href={project?.projectGithubLink ?? 'https://github.com/kaushalluffa'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
              <div className="info__desc">
                <p className="info__desc--text">{project?.projectDescription ?? ''}</p>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return 'No Projects Found.';
  };
  return <div className="highlights__wrapper">{renderProjectCard()}</div>;
}

export default memo(ProjectsWrapper);
