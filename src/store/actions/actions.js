export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const BACKTOHISTORY = 'BACKTOHISTORY';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (amount) => {
    return {
        type: ADD,
        payload : {
            amount
        }
    }
}

export const subtract = (amount) => {
    return {
        type: SUBTRACT,
        payload : {
            amount
        }
    }
}

export const backToHitory = (index) => {
    return dispatch => {

        setTimeout(() => {
            dispatch({
                type: BACKTOHISTORY,
                payload : {
                    index
                }
            });
        }, 2000)
    }
}