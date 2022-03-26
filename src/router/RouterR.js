import React from 'react';

import { Link, Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home';
import Accueil from '../components/Accueil';

const RouterR = () => {
    return <div>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/home" element={<Home />} />
            </Routes>
    </div>;
};

export default RouterR;
