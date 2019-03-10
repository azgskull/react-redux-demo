import React from 'react';

const Control = (props) => {

    return (
        <button onClick={props.dispatchHandler}>{props.children}</button>
    )
}

export default Control;