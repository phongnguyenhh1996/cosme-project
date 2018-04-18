import dispatcher from "../dispatcher";

export function addItem(id,name,price,img) {
    dispatcher.dispatch({
        type: "ADD_ITEM",
        id,
        name,
        price,
        img
    });
}
