import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {p: "Текст"}
    }

    clearText = () => {
    this.setState({p:""} )
    }


    render() {
        return (
            <div>
                <p>{this.state.p}</p>
                <button onClick={this.clearText}>Press me</button>

            </div>
        );
    }
}

export default AboutUs;