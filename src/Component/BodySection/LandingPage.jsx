import React from 'react';
import Civil from '../LeftBodySection/CivilEvents/Civil'
import Menus from '../LeftBodySection/Menus'
import Mechanical from'../LeftBodySection/MechanicalEvents/Mechanical'
import Ece from '../LeftBodySection/EceEvents/Ece'
import Eee from '../LeftBodySection/EeeEvents/Eee'
import Cse from '../LeftBodySection/CseEvents/Cse'
import ActivityEvents from '../LeftBodySection/ExtentionActivityEvents/ActivityEvents'
import { Col, Row } from 'react-bootstrap';


const LandingPage = () => {
    return (
        <div>
           <Menus />
               <Civil />
               <Cse />
               <Mechanical />
               <Ece />
               <Eee />
               <ActivityEvents />

        </div>
    );
};

export default LandingPage;