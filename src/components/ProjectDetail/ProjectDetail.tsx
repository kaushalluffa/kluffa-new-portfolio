import { memo } from 'react';

import SectionHeader from '../shared/SectionHeader/SectionHeader';
import TechStack from '../shared/TechStack/TechStack';
import './style.scss';

function ProjectDetail() {
  return (
    <>
      <SectionHeader title="ProjectDetail" />
      <div className="details">
        <div className="details__coverimg">
          <img src="https://i.ibb.co/tDtB6PF/detailscover.png" alt="details img" />
        </div>
        <div className="details__info">
          <h4 className="details__info--heading">Project Story</h4>
          <p className="details__info--desc">
            Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the
            Internet, but we still crave even more.
            <br />
            <br /> And what helps to achieve a good result? We will look at these issues and some of the possibilities
            of photography and explain that it is a combination of thought imagination, visual design, technical skills
            and organizational skills
          </p>
        </div>
        <TechStack heading="Tech stack used in this project" stack={['react']} />
      </div>
    </>
  );
}

export default memo(ProjectDetail);
