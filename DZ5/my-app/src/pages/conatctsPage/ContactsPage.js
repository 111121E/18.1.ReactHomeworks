import React, {useState} from 'react';

function ContactsPage() {

    const [contact, setContact] = useState({input:""})

    const   changeInput = (event) => {
        setContact({input: event.target.value})
    }

    const addProduct = () => {
        console.log(contact)
        setContact({input: ""})
    }

    const clearProduct = () => {
        console.log(contact)
        setContact({input: ""})
    }


    return (
        <div>
                <input type="text"
                value={contact.input}
                onChange={changeInput}
                placeholder="product"/>
                <button onClick={addProduct}>add</button>
                <button onClick={clearProduct}>clear</button>
        </div>
    );
}

export default ContactsPage;

