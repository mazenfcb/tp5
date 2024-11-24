import React, { useState } from 'react';

//ClickButton Component
export const ClickButton = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <button onClick={() => setClicked(true)}>ClickMe</button>
            {clicked && <p>Clicked</p>}
        </div>
    );
};

//ToggleButton Component
export const ToggleButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevState) => !prevState);
    };

    return (
        <div>
            <button onClick={handleClick}>ClickMe</button>
            <p>{clicked ? "Clicked" : "Not Clicked"}</p>
        </div>
    );
};

//MainApp Component
export const MainApp = () => {
    const [message, setMessage] = useState('');

    const handleClick = (buttonNumber) => {
        setMessage(`Button ${buttonNumber} was clicked`);
    };

    return (
        <div>
            <button onClick={() => handleClick(1)}>Button1</button>
            <button onClick={() => handleClick(2)}>Button2</button>
            <button onClick={() => handleClick(3)}>Button3</button>
            <p>{message}</p>
        </div>
    );
};

//Counter Component
export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};
