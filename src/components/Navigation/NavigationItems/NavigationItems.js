import React from 'react';
import classes from './NavigationItems.css';
import IndividualItems from './IndividualItems/IndividualItems';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <IndividualItems link="/" exact>Burger Builder</IndividualItems>
        {props.isAuthenticated ? <IndividualItems link="/orders">Orders</IndividualItems>: null}
        {!props.isAuthenticated
            ? <IndividualItems link="/auth">LogIn</IndividualItems>
            : <IndividualItems link="/logout">LogOut </IndividualItems>}
    </ul>
);

export default NavigationItems;