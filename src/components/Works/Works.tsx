/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from 'react';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import SectionHeader from '../shared/SectionHeader/SectionHeader';
import './style.scss';
import { AllProjects } from '../../utils/types';
import getAllProject from '../../utils/getAllProjects';
import AnimatedPage from '../../AnimatedPage';

function Works() {
  const [allProjects, setAllProjects] = useState<AllProjects>([]);
  useEffect(() => {
    getAllProject().then((response: any) => {
      setAllProjects(response?.projects);
    });
  }, []);
  return (
    <AnimatedPage>
      <SectionHeader title="My Projects" />
      <div className="works__list">
        <ProjectsWrapper projects={allProjects} />
      </div>
    </AnimatedPage>
  );
}

export default memo(Works);
