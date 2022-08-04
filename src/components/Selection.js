import React, { useState } from 'react';

const Selection = (props) => {
    const {applyColor} = props;
    const [nextBackground, selectNextBackground] = useState({ background: "" })
    return (
        <div className='fix-box' style={nextBackground} onClick={() => applyColor(selectNextBackground)}>
            <h2 className='subheading'>Selection</h2>
        </div>
    )
}

export default Selection;