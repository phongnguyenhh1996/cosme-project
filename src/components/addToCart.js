import React from 'react';
import * as CartActions from '../actions/CartActions';

class AddToCart extends React.Component{
    constructor(props){
        super(props);
    }
    addItem(){
        let item = this.props.item;
        CartActions.addItem(item.id,item.name,item.price,item.img,this.props.qty);
    }
    render(){
        return(
            <button className="btn btn-outline-secondary" onClick={this.addItem.bind(this)}>ADD TO CART
            </button>
        );
    }
}

export default AddToCart;