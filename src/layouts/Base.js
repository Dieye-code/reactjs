import React from 'react';
import Home from '../components/Home';
import RouterR from '../router/RouterR';
import Header from './Header';
import SideBar from './SideBar';

const Base = () => {
  return <div>
    <div className="main-wrapper">
      <RouterR />
      <Header />
      <SideBar />
      <Home/>
    </div>
  </div>;
};

export default Base;
