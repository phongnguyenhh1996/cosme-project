import dispatcher from "../dispatcher";

export function addItem(id,name,price,img,qty) {
    dispatcher.dispatch({
        type: "ADD_ITEM",
        id,
        name,
        price,
        img,
        qty
    });
}

export function deleteItem(id) {
    dispatcher.dispatch({
        type: "DELELE_ITEM",
        id
    });
}

export function updateQty(id,qty) {
    dispatcher.dispatch({
        type: "UPDATE_QTY",
        id,
        qty
    });
}
