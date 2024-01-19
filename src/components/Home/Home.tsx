/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage';
import getHighlightedProjects from '../../utils/getHighlightedProjects';
import getUserInfo from '../../utils/getUserInfo';
import { Developer, AllProjects } from '../../utils/types';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import TechStack from '../shared/TechStack/TechStack';
import './style.scss';

function Home() {
  const [userInfo, setUserInfo] = useState<Developer | null>(null);
  const [highlightedProjects, setHighlightedProjects] = useState<AllProjects>([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      getUserInfo().then((response: any) => {
        if (
          response &&
          response?.developers &&
          Array.isArray(response?.developers) &&
          response?.developers?.length > 0
        ) {
          setUserInfo(response?.developers?.[0]);
        } else {
          setUserInfo(null);
        }
      });
      getHighlightedProjects().then((response: any) => {
        if (
          response &&
          response?.highlights &&
          Array.isArray(response?.highlights) &&
          response?.highlights?.length > 0
        ) {
          setHighlightedProjects(response?.highlights);
        } else {
          setHighlightedProjects([]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AnimatedPage>
      <div className="home">
        <div className="hero">
          <div className="hero__heading">{userInfo?.shortDesc}</div>
          {/* {userInfo?.shortDesc ? <div className="hero__heading">{userInfo?.shortDesc}</div> : <Loader />} */}
          <button className="hero__button" type="button" onClick={() => navigate('/works')}>
            See Projects
          </button>
        </div>

        <TechStack heading="Technical Skills" stack={(userInfo && userInfo?.stack) ?? ['react']} />

        <div className="section">
          <div className="section__heading">My Project Highlight</div>
          <button className="section__button" type="button" onClick={() => navigate('/works')}>
            Explore More
          </button>

          <ProjectsWrapper projects={highlightedProjects} />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default memo(Home);
