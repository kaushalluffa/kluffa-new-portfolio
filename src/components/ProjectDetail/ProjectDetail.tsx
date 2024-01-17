/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getOneProject from '../../utils/getOneProject';
import { Project } from '../../utils/types';
import Loader from '../shared/Loader/Loader';

import SectionHeader from '../shared/SectionHeader/SectionHeader';
import TechStack from '../shared/TechStack/TechStack';
import './style.scss';

function ProjectDetail() {
  const { projectId } = useParams();
  const [projectInfo, setProjectInfo] = useState<Project>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (projectId) {
      try {
        getOneProject(projectId).then((response: any) => {
          setProjectInfo(response?.project);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [projectId]);
  return (
    <>
      <SectionHeader title="ProjectDetail" />
      {loading ? (
        <Loader />
      ) : (
        <div className="details">
          <div className="details__coverimg">
            <img
              src={projectInfo?.projectCover?.url ?? 'https://i.ibb.co/tDtB6PF/detailscover.png'}
              alt="details img"
            />
          </div>
          <div className="details__info">
            <h4 className="details__info--heading">{projectInfo?.projectTitle ?? ''}</h4>
            <p className="details__info--desc">{projectInfo?.projectDescription ?? ''}</p>
          </div>
          <TechStack heading="Tech stack used in this project" stack={projectInfo?.stack ?? ['react']} />
          <div className="details__video">
            {(projectInfo?.projectDemoVideoUrl || projectInfo?.projectVideo?.url) && (
              <video controls src={projectInfo?.projectDemoVideoUrl || projectInfo?.projectVideo?.url} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(ProjectDetail);
