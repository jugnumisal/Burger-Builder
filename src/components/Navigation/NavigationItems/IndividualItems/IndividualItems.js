import React from 'react';
import classes from './IndividualItems.css';

const IndividualItems = (props) => (
    <li className={classes.IndividualItems}>
        <a href = {props.link} className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default IndividualItems;