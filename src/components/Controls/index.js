import React from 'react';
import {connect} from 'react-redux';

import Control from './Control';
import {
    increment,
    decrement,
    subtract,
    add,
} from '../../store/actions/actions';

const Controls = (props) => {

    return (
        <div>
            <Control dispatchHandler={props.onIncrementCounter}>Increment</Control>
            <Control dispatchHandler={props.onDecrementCounter}>Decrement</Control>
            <Control dispatchHandler={props.onAddCounter}>Add 10</Control>
            <Control dispatchHandler={props.onSubtractCounter}>Subtract 10</Control>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    onIncrementCounter : () => dispatch(increment()),
    onDecrementCounter : () => dispatch(decrement()),
    onAddCounter : () => dispatch(add(10)),
    onSubtractCounter : () => dispatch(subtract(10))
});

export default connect(null, mapDispatchToProps)(Controls);