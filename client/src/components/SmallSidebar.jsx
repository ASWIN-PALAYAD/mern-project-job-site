import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar';
import {FaTimes} from 'react-icons/fa';
import { useAppContext } from '../constext/appContext';
import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSidebar = () => {

  const {showSidebar,toggleSidebar} = useAppContext() 


  return (
    <Wrapper>
        <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
          <div className="content">
            <button type='button' className='close-btn' onClick={toggleSidebar}>
              <FaTimes/>
            </button>

            <header>
              <Logo/>
            </header>

            {/* <div className="nav-links">
              {links.map((link)=> {
                const {text,path,id,icon} = link
                return (
                  <NavLink to={path} key={id} onClick={toggleSidebar}  className={({isActive})=> isActive ? 'nav-link active' : 'nav-link' } >
                    <span className='icon' >{icon}</span>
                    {text}
                  </NavLink>
                )
                
              })}
            </div> */}

              <NavLinks toggleSidebar={toggleSidebar} />

          </div>
        </div>
    </Wrapper>
  )
}

export default SmallSidebar