import React from 'react';
import Accueil from '../components/Accueil';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const Base = () => {
  return <div>
    <div className="wrapper">
      <Header />
      <SideBar />
      <Accueil />
      <Aside />
      <Footer />
    </div>
  </div>;
};

export default Base;
