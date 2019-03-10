import React from 'react';
import { connect } from 'react-redux';

import CounterTotal from './CounterTotal';

const Counter = (props) => {

    return (
        <div>
            <CounterTotal counter={props.counter}></CounterTotal>
        </div>
    )
}

const mapStateToProps = state => ({
    counter : state.ctr.counter
});

export default connect(mapStateToProps)(Counter);