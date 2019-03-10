import React from 'react';

const HistoryLine = (props) => {

    return (
        <li onClick={props.dispatchHandler}>{props.counter}</li>
    )
}

export default HistoryLine;