import { ADDTOCART_REQUEST } from './types';

export const addToCart = (product) => (dispatch) => {
    console.log("IN ACTIONS ADDTOCART")
    console.log(product)
    
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(1);
		if (product.available_quantity < qty) {
			cart[id] = product.available_quantity; 
		} else {
			cart[id] = qty
		}
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({
            type: ADDTOCART_REQUEST,
            payload: cart
        })
}