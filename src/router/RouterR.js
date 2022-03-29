import React from 'react';

import {  Route, Routes} from 'react-router-dom'
import Accueil from '../components/Accueil';
import Client from '../components/client/Client';

const RouterR = () => {
    return <>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/clients" element={<Client />} />
        </Routes>
    </>;
};

export default RouterR;
