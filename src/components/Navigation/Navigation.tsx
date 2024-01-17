/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

function Navigation() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="navigation">
      <div className="navigation__logo" onClick={() => navigate('/')}>
        Kaushal
      </div>
      <div className={`navigation__menu ${showMenu ? 'showMenu' : ''}`}>
        <ul className="naviation__menu--ul">
          <li onClick={() => setShowMenu(false)} className="navigation__menu--li">
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setShowMenu(false)} className="navigation__menu--li">
            <Link to="/works">My Works</Link>
          </li>
          <li onClick={() => setShowMenu(false)} className="navigation__menu--li">
            <button type="button" className="navigation__menu--button">
              <Link to="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
      <div
        className="navigation__bars"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <div className="navigation__bars--bar" />
        <div className="navigation__bars--bar" />
        <div className="navigation__bars--bar" />
      </div>
    </div>
  );
}

export default memo(Navigation);
