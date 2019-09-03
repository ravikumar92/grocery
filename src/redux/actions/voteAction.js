import { VOTING_REQUEST } from './types';

export const vote = (number, product) => (dispatch) => {

        let vote = localStorage.getItem('vote') ? JSON.parse(localStorage.getItem('vote')) : {id:'',rating:0};
        let id = product.id.toString();
        vote.id = id;
        vote.rating = number;
		vote[id]= (vote[id] ? vote[id]: number);
		// vote = number; 
        localStorage.setItem('vote', JSON.stringify(vote));
        dispatch({
            type: VOTING_REQUEST,
            payload: vote
        })
}