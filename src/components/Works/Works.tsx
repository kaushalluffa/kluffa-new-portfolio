import { memo } from 'react';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import './style.scss';

function Works() {
  return (
    <div className="works">
      <div className="works__header">
        <h4 className="works__heading">My Projects</h4>
      </div>
      <div className="works__list">
        <ProjectsWrapper />
      </div>
    </div>
  );
}

export default memo(Works);
