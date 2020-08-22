import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { RiHomeLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import { FiBell } from 'react-icons/fi';
import { CgWorkAlt } from 'react-icons/cg';
import { TiThMenuOutline } from 'react-icons/ti';

import Logo from '../../assets/logo.png';
import Avatar from '../../assets/avatar.png';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container colorBackground={colors.backgroundHeader} >
        <div className="header-container">
          <div className="logo-search">
            <img src={Logo} alt="LinkedIn"  />
            <div className="search-container">
              <input className="search-header" type="text" placeholder="Search" />
            </div>
          </div>
          
          <div className="menu-header">
            <nav>
              <ul>
                <li><RiHomeLine size={25}/>Home</li>
                <li><BsPeople size={25}/>Network</li>
                <li><BiMessageRounded size={25}/>Messaging</li>
                <li><FiBell size={25}/>Notifications</li>
                <li><CgWorkAlt size={25}/>Jobs</li>
                <li><TiThMenuOutline size={25}/>Work</li>
              </ul>
            </nav>
            <div className="avatar-container" > 
              <div className="switch">
                <Switch
                  onChange={toggleTheme}
                  checked={title === 'dark'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={25}
                  width={50}
                  handleDiameter={20}
                  offColor={colors.tertiary}
                  onColor={colors.primary}
                />
              </div>

              <img src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </Container>
  )
}

export default Header;