import React from 'react';
import Civil from '../LeftBodySection/CivilEvents/Civil'
import Menus from '../LeftBodySection/Menus'
import Mechanical from'../LeftBodySection/MechanicalEvents/Mechanical'
import Cse from '../LeftBodySection/CseEvents/Cse'


const LandingPage = () => {
    return (
        <div>
               <Menus />
               <Civil />
               <Cse />
               <Mechanical />

        </div>
    );
};

export default LandingPage;