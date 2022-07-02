import { type } from 'os';
import { useReducer } from 'react';
import './CounterApp.css';


interface CounterState {
    counter: number;

}
const initialState: CounterState = {
    counter: 0
}

type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }

const counterAction = (state: CounterState, action: ActionType): CounterState => {
    if (action.type == 'incrementar') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type == 'decrementar') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type == 'custom') {
        let newState:CounterState = { counter : 0 };
        newState.counter = action.payload;
        return newState;
    }
    return state;
}

function CounterRedux() {
    const [state, dispatch] = useReducer(counterAction, initialState)

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {state.counter} </h2>
            <button
                onClick={() => dispatch({type: 'incrementar'})}>
                +1
            </button>
            <button
                onClick={() => dispatch({type: 'decrementar'})}>
                -1
            </button>
            <button
                onClick={() => dispatch({type: 'custom', payload: 0 })}>
                Reset
            </button>
        </>
    );
}


export default CounterRedux;