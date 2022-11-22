import React from 'react';
import classes from "./classComponentOne.module.css"

class ClassComponentOne extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={classes.user}>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
            </ul>
        );
    }
}

export default ClassComponentOne;