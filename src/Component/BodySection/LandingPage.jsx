import React from 'react';
import Civil from '../LeftBodySection/CivilEvents/Civil'
import Menus from '../LeftBodySection/Menus'
import Mechanical from'../LeftBodySection/MechanicalEvents/Mechanical'
import Ece from '../LeftBodySection/EceEvents/Ece'
import Cse from '../LeftBodySection/CseEvents/Cse'


const LandingPage = () => {
    return (
        <div>
               <Menus />
               <Civil />
               <Cse />
               <Mechanical />
               <Ece />

        </div>
    );
};

export default LandingPage;