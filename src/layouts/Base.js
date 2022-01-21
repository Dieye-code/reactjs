import React from 'react';
import RouterR from '../router/RouterR';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const Base = () => {
  return <div>
    <div className="wrapper">
      <Header />
      <RouterR />
      <Aside />
      <Footer />
    </div>
  </div>;
};

export default Base;
