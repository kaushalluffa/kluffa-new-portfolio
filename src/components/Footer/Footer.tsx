import { memo } from 'react';
import Github from '../../assets/icons/Github';
import Gmail from '../../assets/icons/Gmail';
import Linkedin from '../../assets/icons/Linkedin';
import './style.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__email">
        <div className="footer__email--heading">Get in Touch With</div>
        <a href="mailto:kaushalluffa91@gmail.com" className="footer__email--text">
          kaushalluffa91@gmail.com
        </a>
      </div>
      <div className="footer__links">
        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/kaushalluffa" className="footer__links--icon">
          <Linkedin />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kluffa-vn" className="footer__links--icon">
          <Github />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/kaushalluffa" className="footer__links--icon">
          <Github />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:kaushalluffa91@gmail.com" className="footer__links--icon">
          <Gmail />
        </a>
      </div>
    </div>
  );
}

export default memo(Footer);
