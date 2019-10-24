import React from 'react';

const validation = (props) => {
    let verifySize = <p>Text long enough</p>;

    if (props.length < 5) {
        verifySize = <p>Text too short</p>
    }

    return (
        <div>
            {verifySize}
            <p>Text length: {props.length}</p>
        </div>
    );
}

export default validation;