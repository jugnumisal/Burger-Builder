import React from 'react';
import classes from './NavigationItems.css';
import IndividualItems from './IndividualItems/IndividualItems';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <IndividualItems link="/" exact>Burger Builder</IndividualItems>
        <IndividualItems link="/orders">Orders</IndividualItems>
    </ul>
);

export default NavigationItems;