import React from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { addToCart } from '../redux/actions/addToCartAction';
class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rating:0
		}

		this.submit = this.submit.bind(this);
		this.changeRating = this.changeRating.bind(this);
		this.product = {};
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	changeRating(newRating) {
		console.log(newRating)		
		this.setState({
			rating: newRating
		})
	  }

	  submit(product) {  
		  this.props.dispatch(addToCart(product));
	  }

	render(){
		this.product= this.props.product;
		return (
		    <div className="card" style={{ marginBottom: "10px"}}>
			  <div className="card-body">
			    <h4 className="card-title">{this.product.name}</h4>
			    <p className="card-text">{this.product.description}</p>
			    <h5 className="card-text"><small>price: </small>${this.product.price}</h5>
			    <span className="card-text"><small>Available Quantity: </small>{this.product.available_quantity}</span>
			    
				{ this.product.available_quantity > 0 ?
				<div>
				 <StarRatings
				 starRatedColor="yellow"
				 rating={this.state.rating}
				 changeRating={this.changeRating}
				 numberOfStars={5}
				 name= "product" 
			   />
			    	<div>
			    		<button className="btn btn-sm btn-warning float-right" onClick={()=>this.submit(this.product)}>Add to cart</button>
			    	</div>
					</div> : 
			    	<p className="text-danger"> product is out of stock </p>
			 	}

			  </div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({ 
	quantity: state.quantity,
	rating: state.vote.rating.rating
});

const mapDispatchToProps = (dispatch) => {
	return {
		 dispatch
	}
}

  export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)