import { combineReducers } from 'redux';
import addToCartReducer from './addReducers'
import voteReducer from './voteReducers';

export default combineReducers({
    addtoCart: addToCartReducer,
    vote: voteReducer
})