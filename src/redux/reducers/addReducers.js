import { ADDTOCART_REQUEST } from '../actions/types';

const initialState = {
    quantity: 1
 }

export default function (state = initialState, action) {
    switch(action.type) {
        case ADDTOCART_REQUEST: 
            return {
                ...state,
            }
        default:
        return state;
    }
}