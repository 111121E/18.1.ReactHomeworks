import React from 'react';

function HelloWorld(props) {
    const button = () => {
        alert("Hello World")
    }



    return (
        <>
            <button onClick={button}>Click Me</button>
        </>
    );
}

export default HelloWorld;