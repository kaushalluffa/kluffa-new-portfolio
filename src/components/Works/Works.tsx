import { memo } from 'react';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import SectionHeader from '../shared/SectionHeader/SectionHeader';
import './style.scss';

function Works() {
  return (
    <>
      <SectionHeader title="My Projects" />
      <div className="works__list">
        <ProjectsWrapper />
      </div>
    </>
  );
}

export default memo(Works);
