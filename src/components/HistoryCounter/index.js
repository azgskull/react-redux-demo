import React from 'react';
import { connect } from 'react-redux';

import HistoryLine from './HistoryLine';
import { backToHitory } from '../../store/actions/actions';


const HistoryCounter = (props) => {
    
    return (
        <ul>
            {props.history.map((counter,i) => (
                    <HistoryLine 
                        key={i+' - '+counter}
                        counter={counter}
                        dispatchHandler={() => props.onBackToHistory(i)}
                    ></HistoryLine>
                )
            )}
        </ul>
    )
}

const mapStateToProps = state => ({
    history : state.ctr.history
});

const mapDispatchToProps = dispatch => ({
    onBackToHistory : (index) => dispatch(backToHitory(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryCounter);