import React, {Component} from 'react';
import {PortfolioPageList} from "../../component/portfolioPageList/PortfolioPageList";
class PortfolioPage extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []}
    }
    getData = () => {
        this.setState({data:["Work1", "Work2"]})
    }

    render() {
        return (
            <>
                <button onClick={this.getData}>Get</button>
                <PortfolioPageList portfolioPageList={this.state.data}/>
            </>

        );
    }
}

export default PortfolioPage;