import React, { useState } from 'react';

export const DisplayTab = ({ tab }) => {
    const [elements, setElements] = useState(tab)

    const handleRemove = (index) => {
        const newElements = elements.filter((_, i) => i !== index)
        setElements(newElements);
    };

    return (
        <ul>
            {elements.map((item, index) => (
                <li key={index} onClick={() => handleRemove(index)}>
                    Element {index + 1} is: {item}
                </li>
            ))}
        </ul>
    );
};
