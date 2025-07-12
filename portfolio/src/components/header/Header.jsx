import { Link, NavLink } from 'react-router-dom';

import { greeting } from '../../portFolio';
import './Header.css';

/* eslint-disable no-unused-vars */

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};
function Header(props) {
  const { theme } = props;
 
  const path = "/home"

  const navItems = [
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'Experience', path: '/experience' },
    { id: 3, name: 'Education', path: '/education' },
    { id: 4, name: 'Projects', path: '/projects' },
    { id: 5, name: 'MySkills', path: '/myskills' },
    { id: 6, name: 'Contact', path: '/contact' }
  ]

  return (
    <div  style={{ color: theme.text }} >
      <header className='header'>
          <NavLink to={path} className="logo">
            <span>&lt;</span>
            <span className="logo-name">
              {greeting.logo_name}
            </span>
            <span>/&gt;</span>
          </NavLink>
          {/* for mobile view */}
          <input className='menu-btn' type='checkbox' id='menu-btn' />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='navicon'></span>
          </label>
          {/* {------} */}
          {/* <nav> */}
            <ul className="menu" style={{ 
              backgroundColor: theme?.body,
              boxShadow: `${theme?.headerColor} 0px 0px 15px -2px`
              }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "normal"
                    })}
                    onMouseEnter={(event)=>onMouseEnter(event,theme.highlight)}
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          {/* </nav> */}
      </header>
    </div>

  );
}
export default Header;