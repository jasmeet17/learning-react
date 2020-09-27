import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layouts.css'

const layouts = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            Children => {props.children}
        </main>
    </Aux>
);

export default layouts;