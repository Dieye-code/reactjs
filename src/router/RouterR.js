import React from 'react';

import { Link, Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home';
import Accueil from '../components/Accueil';
import Client from '../components/client/Client';

const RouterR = () => {
    return <div>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/clients" element={<Client />} />
                <Route path="/" element={<Accueil />} />
                <Route path="/" element={<Accueil />} />
                <Route path="/" element={<Accueil />} />
            </Routes>
    </div>;
};

export default RouterR;
