import * as ActionTypes from '../actions/actions';

const initialState = {
    counter: 0,
    history : [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return updateState(state.counter + 1);
        case ActionTypes.DECREMENT:
            return updateState(state.counter - 1);
        case ActionTypes.ADD:
            return updateState(state.counter + action.payload.amount);
        case ActionTypes.SUBTRACT:
            return updateState(state.counter - action.payload.amount);
        case ActionTypes.BACKTOHISTORY:
            let counter = state.history[action.payload.index];
            let history = [...state.history].splice(0, action.payload.index+1);

            return {
                counter: counter,
                history : history
            }
        default:
            return state;
    }


    function updateState(newCounter) {
        let history = [...state.history];
            history.push(newCounter);
        return {
            ...state,
            counter : newCounter,
            history : history
        }
    }
}

export default reducer;