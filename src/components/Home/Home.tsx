/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from 'react';
import getUserInfo from '../../utils/getUserInfo';
import { Developer } from '../../utils/types';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';
import TechStack from '../shared/TechStack/TechStack';
import './style.scss';

function Home() {
  const [userInfo, setUserInfo] = useState<Developer | null>(null);
  useEffect(() => {
    getUserInfo().then((response: any) => {
      if (response && response?.developers && Array.isArray(response?.developers) && response?.developers?.length > 0) {
        setUserInfo(response?.developers?.[0]);
      } else {
        setUserInfo(null);
      }
    });
  }, []);
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__heading">{userInfo?.shortDesc}</div>
        <button className="hero__button" type="button">
          See Projects
        </button>
      </div>

      <TechStack heading="Technical Skills" stack={(userInfo && userInfo?.stack) ?? ['react']} />

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
