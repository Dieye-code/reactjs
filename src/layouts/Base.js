import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';
import RouterR from '../router/RouterR';
import Header from './Header';
import SideBar from './SideBar';

const Base = () => {
  return <div className="main-wrapper">

    <Header />
    <SideBar />
    <RouterR />
  </div>;
};

export default Base;
