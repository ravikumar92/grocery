import { VOTING_REQUEST } from './types';

export const vote = (number, product) => (dispatch) => {
        let vote = localStorage.getItem('vote') ? JSON.parse(localStorage.getItem('vote')) : {};
        let id = product.id.toString();
		vote[id]= (vote[id] ? vote[id]: 0);
		vote = number; 
        localStorage.setItem('vote', vote);
        dispatch({
            type: VOTING_REQUEST,
            payload: vote
        })
}