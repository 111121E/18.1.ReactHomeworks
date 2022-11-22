import React from 'react';
import classes from "./classComponentTwo.module.css"

class ClassComponentTwo extends React.Component {
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

export default ClassComponentTwo;