import { memo } from 'react';
import Github from '../../assets/icons/Github';
import './style.scss';

function ProjectsWrapper() {
  return (
    <div className="highlights__wrapper">
      <div className="highlights__project-card">
        <div className="hightlights__project-card--img">
          <img src="https://i.ibb.co/80bKfpD/Img.png" alt="test demo" />
        </div>
        <div className="highlights__project-card--info">
          <div className="info">
            <div className="info__heading">Brand Journey Improvement</div>
            <div className="info__stack">
              <p className="info__stack--label">Stack</p>
              <p className="info__stack--tech">HTML,CSS,JS</p>
            </div>
            <div className="info__stack">
              <p className="info__stack--label">Link</p>
              <div className="info__stack--tech">
                <a href="https://github.com/kaushalluffa" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
            <div className="info__desc">
              <p className="info__desc--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights__project-card">
        <div className="hightlights__project-card--img">
          <img src="https://i.ibb.co/80bKfpD/Img.png" alt="test demo" />
        </div>
        <div className="highlights__project-card--info">
          <div className="info">
            <div className="info__heading">Brand Journey Improvement</div>
            <div className="info__stack">
              <p className="info__stack--label">Stack</p>
              <p className="info__stack--tech">HTML,CSS,JS</p>
            </div>
            <div className="info__stack">
              <p className="info__stack--label">Link</p>
              <div className="info__stack--tech">
                <a href="https://github.com/kaushalluffa" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
            <div className="info__desc">
              <p className="info__desc--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights__project-card">
        <div className="hightlights__project-card--img">
          <img src="https://i.ibb.co/80bKfpD/Img.png" alt="test demo" />
        </div>
        <div className="highlights__project-card--info">
          <div className="info">
            <div className="info__heading">Brand Journey Improvement</div>
            <div className="info__stack">
              <p className="info__stack--label">Stack</p>
              <p className="info__stack--tech">HTML,CSS,JS</p>
            </div>
            <div className="info__stack">
              <p className="info__stack--label">Link</p>
              <div className="info__stack--tech">
                <a href="https://github.com/kaushalluffa" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
            <div className="info__desc">
              <p className="info__desc--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="highlights__project-card">
        <div className="hightlights__project-card--img">
          <img src="https://i.ibb.co/80bKfpD/Img.png" alt="test demo" />
        </div>
        <div className="highlights__project-card--info">
          <div className="info">
            <div className="info__heading">Brand Journey Improvement</div>
            <div className="info__stack">
              <p className="info__stack--label">Stack</p>
              <p className="info__stack--tech">HTML,CSS,JS</p>
            </div>
            <div className="info__stack">
              <p className="info__stack--label">Link</p>
              <div className="info__stack--tech">
                <a href="https://github.com/kaushalluffa" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
            <div className="info__desc">
              <p className="info__desc--text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui iure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectsWrapper);
