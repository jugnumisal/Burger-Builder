import React from 'react';
import classes from './IndividualItems.css';
import { NavLink } from 'react-router-dom';

const IndividualItems = (props) => (
    <li className={classes.IndividualItems}>
        <NavLink
            to = {props.link}
            exact={props.exact}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default IndividualItems;