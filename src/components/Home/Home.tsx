import { memo } from 'react';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import './style.scss';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__heading">Adaptive Logo Design for Your Brand</div>
        <button className="hero__button" type="button">
          See Projects
        </button>
      </div>
      <div className="highlights">
        <div className="highlights__heading">My Project Highlight</div>
        <button className="highlights__button" type="button">
          Explore More
        </button>

        <ProjectsWrapper />
      </div>
    </div>
  );
}

export default memo(Home);
