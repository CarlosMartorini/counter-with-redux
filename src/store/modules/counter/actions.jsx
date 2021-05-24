import { ADD_NUM, SUB_NUM} from './actionsType';

export const addNum = (payload) => ({
    type: ADD_NUM,
    payload
});

export const subNum = (payload) => ({
    type: SUB_NUM,
    payload
});