import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
    const { age, loading } = useSelector((state) => state.age);

    return (
        <div>
            {(
                <h1>Current Age: {age}</h1>
            )}
        </div>
    );
};

export default AgeDisplay;
