import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class CartStore extends EventEmitter{
	constructor(){
		super();
		this.items = [];
	}
	addItem(id,name,price,img) {
        let a = this.items;
        if (a.length == 0){
        	this.items.push({
	            id,
	            name,
	            price,
	            img,
	            quantity: 1
        	});
        } else {
        	let unique=true;
        	for (var i=0; i<a.length; i++){
        		if (a[i].id == id){
        			this.items[i].quantity+=1;
        			unique = false;
        			break;
        		}
        	}
        	if (unique){
        		this.items.push({
	            id,
	            name,
	            price,
	            img,
	            quantity: 1
        	});
        	}
				};            
        this.emit("change");
	}
	getAll() {
        return this.items;
    }
    handleAction(action) {
        switch (action.type){
            case "ADD_ITEM": {
                this.addItem(action.id,action.name,action.price,action.img)
            }
        }
    }
}

const cartStore = new CartStore;

dispatcher.register(cartStore.handleAction.bind(cartStore));

export default cartStore;