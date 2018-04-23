import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class CartStore extends EventEmitter{
	constructor(){
		super();
		this.items = [{id: 1,
                name: "ALCOHOL-FREE HAND SANITIZER",
                price: 46.00,
                img: "product-1",
                quantity: 1},
                {id: 2,
                name: "SERUMTOLOGIE C SERUM",
                price: 32.00,
                img: "product-2",
                quantity: 1},
                {id: 3,
                name: "ORGANIC GREEN TEA",
                price: 19.00,
                img: "product-3",
                quantity: 1}];
	}
	addItem(id,name,price,img) {
        let pos = this.items.map((i)=> i.id).indexOf(id);
        if (pos>=0){this.items[pos].quantity+=1;}
            else{
                this.items.push({
                id,
                name,
                price,
                img,
                quantity: 1
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
                this.addItem(action.id,action.name,action.price,action.img);
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