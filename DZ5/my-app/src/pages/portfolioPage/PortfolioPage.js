import React, {useState} from 'react';
import {PortfolioPageList} from "../../components/portfolioPageList/PortfolioPageList";

function PortfolioPage(props) {

    const [list, setList] = useState([""])

    const addText = () => {
        setList(["Work1", "Work2"])

    }

    return (
        <>
            <button onClick={addText}>Get</button>
            <PortfolioPageList portfolioPageList={list}/>

        </>
    );
}

export default PortfolioPage;