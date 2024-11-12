import React from 'react';
import '../styles/AnimationWrapper.css';

function AnimationWrapper({ children }) {
    return (
        <div className="animation-wrapper">
            {children}
        </div>
    );
}

export default AnimationWrapper;
