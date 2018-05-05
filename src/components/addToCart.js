import React from 'react';
import * as CartActions from '../actions/CartActions';
import { findDOMNode } from 'react-dom';
import $ from "jquery";

class AddToCart extends React.Component{
    constructor(props){
        super(props);
    }
    addItem(){
        let el= findDOMNode(this.refs.added);
        $(el).html("ADD TO CART <i class=\"fas fa-cog fa-spin\"></i>");
        setTimeout(()=>this.addedItem(el),500)
    }
    addedItem(el){
        let item = this.props.item;
        CartActions.addItem(item.id,item.name,item.price,item.img,this.props.qty);
        $(el).html("ADDED TO CART <i class=\"fas fa-check\"></i>");
    }
    render(){
        return(
            <button ref="added" className="btn btn-outline-secondary text-dark" onClick={this.addItem.bind(this)}>ADD TO CART
            </button>
        );
    }
}

export default AddToCart;