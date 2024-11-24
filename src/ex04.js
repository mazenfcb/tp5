import React, { useState } from 'react';

export const AddDivForm = () => {
    const [divs, setDivs] = useState([]);
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setDivs([...divs, { height, width, backgroundColor }]);
        setHeight('');
        setWidth('');
        setBackgroundColor('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Background Color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
                <button type="submit">Add Div</button>
            </form>
            {divs.map((div, index) => (
                <div
                    key={index}
                    style={{
                        height: `${div.height}px`,
                        width: `${div.width}px`,
                        backgroundColor: div.backgroundColor,
                    }}
                >
                    Div {index + 1}
                </div>
            ))}
        </div>
    );
};
