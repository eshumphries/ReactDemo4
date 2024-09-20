import React, { useState } from 'react';

function ButtonComponent() {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('It works');
    };

    return (
        <div>
            <button onClick={handleClick}>Does this work?</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ButtonComponent;