import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar';
import { useAppContext } from '../constext/appContext';
import NavLinks from './NavLinks';
import Logo from './Logo';


const BigSidebar = () => {

  const {showSidebar} = useAppContext();

  return (
    <Wrapper>
        <div className={showSidebar? 'sidebar-container show-sidebar' : 'sidebar-container'} >
          <div className="content">
            <header>
              <Logo/>
            </header>
            <NavLinks/>
          </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar