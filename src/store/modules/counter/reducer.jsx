import { ADD_NUM, SUB_NUM } from './actionsType';

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
        case ADD_NUM:
            return state + action.payload;

        case SUB_NUM:
            return state - action.payload;
        
        default:
            return state;
    }
}

export default reducerCounter;