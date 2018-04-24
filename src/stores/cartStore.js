import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class CartStore extends EventEmitter{
	constructor(){
		super();
		this.items = [];
	}
	addItem(id,name,price,img,qty) {
        let pos = this.items.map((i)=> i.id).indexOf(id);
        if (pos>=0){this.items[pos].quantity= parseFloat(this.items[pos].quantity)+parseFloat(qty);}
            else{
                this.items.push({
                id,
                name,
                price,
                img,
                quantity: qty
            });
            };  
        this.emit("change");
	}
    deleteItem(id){
        let pos = this.items.map((i)=> i.id).indexOf(id);
        this.items.splice(pos, 1);
        this.emit("change");
    }
    updateQty(id,qty){
        let pos = this.items.map((i)=> i.id).indexOf(id);
        this.items[pos].quantity=qty;
        this.emit("change");
    }
	getAll() {
        return this.items;
    }
    handleAction(action) {
        switch (action.type){
            case "ADD_ITEM": {
                this.addItem(action.id,action.name,action.price,action.img,action.qty);
                break;
            }
            case "DELELE_ITEM": {
                this.deleteItem(action.id);
                break;
            }
            case "UPDATE_QTY": {
                this.updateQty(action.id,action.qty);
                break;
            }
        }
    }
}

const cartStore = new CartStore;

dispatcher.register(cartStore.handleAction.bind(cartStore));

export default cartStore;