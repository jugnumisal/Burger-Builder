import React from 'react';
import classes from './NavigationItems.css';
import IndividualItems from './IndividualItems/IndividualItems';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <IndividualItems link="/" active>Burger Builder</IndividualItems>
        <IndividualItems link="/">Checkout</IndividualItems>
    </ul>
);

export default NavigationItems;