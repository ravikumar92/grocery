import { VOTING_REQUEST } from '../actions/types';
const initialState = {
    rating: 0
}

export default function (state = initialState, action) {
    console.log(action)
    console.log("IN REDUCER")
    switch(action.type) {
        case VOTING_REQUEST: 
            return {
                ...state,
                rating: action.payload
            }
        default:
        return state;
    }
}