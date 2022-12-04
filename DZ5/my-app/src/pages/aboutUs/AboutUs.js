import React, {useState} from 'react';
import {Text} from "../../components/text/Text";

function AboutUs(props) {

    const [status, setStatus] = useState(true)

    const clearText = () => {
        setStatus(!status)
    }
    return (
        <>
            {status ? <Text/> : false }
            <button onClick={clearText}>Press me</button>
        </>
    );
}

export default AboutUs;