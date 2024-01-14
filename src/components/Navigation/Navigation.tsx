import { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__logo">Kaushal</div>
      <div className="navigation__menu">
        <ul className="naviation__menu--ul">
          <li className="navigation__menu--li">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__menu--li">
            <Link to="/works">My Works</Link>
          </li>
          <li className="navigation__menu--li">
            <button type="button" className="navigation__menu--button">
              <Link to="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Navigation);
