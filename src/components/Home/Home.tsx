import { memo } from 'react';
import Github from '../../assets/icons/Github';
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui
                    iure.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui
                    iure.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui
                    iure.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque suscipit natus neque ipsa qui
                    iure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Home);
