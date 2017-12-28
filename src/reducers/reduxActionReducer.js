import { createActions, handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT } from '../types'

export const { increment, decrement } = createActions({
    INCREMENT: amount => ({ amount }),
    DECREMENT: amount => ({ amount })
});

const intialState = { counter: 0 }


const actionReducer = handleActions({
    [INCREMENT](state, { payload: { amount } }) {
        return { ...state, counter: state.counter + amount }
    },
    [DECREMENT](state, { payload: { amount } }) {
        return { ...state, counter: state.counter + amount }
    }
}, intialState)

export default actionReducer        
