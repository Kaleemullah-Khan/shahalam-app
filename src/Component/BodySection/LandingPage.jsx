import React from 'react';
import Civil from '../LeftBodySection/CivilEvents/Civil'
import Menus from '../LeftBodySection/Menus'
import Cse from '../LeftBodySection/CseEvents/Cse'

const LandingPage = () => {
    return (
        <div>
               <Menus />
               <Civil />
               <Cse />

        </div>
    );
};

export default LandingPage;