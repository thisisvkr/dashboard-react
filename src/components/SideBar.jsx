import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import './Sidebar.css';
import { SidebarData } from '../assets/data/data';
import { useState, useEffect } from 'react';

import userImg from '../assets/images/userImage.webp';

function SideBar() {
  const [isSelected, setIsSelected] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleOnClick = index => {
    setIsSelected(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='sidebar-dashboard-container'>
      <div className='sidebar-dashboard-panel'>
        <RxDashboard className='sidebar-dashboard-panel-icon' />
        <h1 className='sidebar-dashboard-panel-title'>Dashboard</h1>
        <div onClick={() => setIsExpanded(!isExpanded)}>
          {windowWidth <= 768 ? (
            isExpanded ? (
              <AiOutlineClose className='sidebar-dashboard-panel-menu-icon' />
            ) : (
              <AiOutlineMenu className='sidebar-dashboard-panel-menu-icon' />
            )
          ) : null}
        </div>
      </div>
      {windowWidth <= 768
        ? isExpanded &&
          SidebarData.map((data, i) => (
            <div
              onClick={() => handleOnClick(i)}
              key={data.title}
              className={`sidebar-dashboard-item ${
                isSelected === i ? 'active' : ''
              }`}
            >
              {<data.icon className='icon-style' />}
              <div className='title-icon'>
                <h1
                  className={`sidebar-dashboard-title ${
                    isSelected === i ? 'selected' : ''
                  }`}
                >
                  {data.title}
                </h1>
                <RiArrowRightSLine className='arrow-icon' />
              </div>
            </div>
          ))
        : SidebarData.map((data, i) => (
            <div
              onClick={() => handleOnClick(i)}
              key={data.title}
              className={`sidebar-dashboard-item ${
                isSelected === i ? 'active' : ''
              }`}
            >
              {<data.icon className='icon-style' />}
              <div className='title-icon'>
                <h1
                  className={`sidebar-dashboard-title ${
                    isSelected === i ? 'selected' : ''
                  }`}
                >
                  {data.title}
                </h1>
                <RiArrowRightSLine className='arrow-icon' />
              </div>
            </div>
          ))}
      <div className='active' id='user'>
        <div className='user'>
          <img src={userImg} alt='userImage' />
          <div className='userInfo'>
            <span className='userName'>Evano</span>
            <span className='userDesignation'>Project Manager</span>
          </div>
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
