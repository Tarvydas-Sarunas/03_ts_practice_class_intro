"use strict";
class CartItem {
    constructor(title, qty, price, onSale = false) {
        this.title = title;
        this.qty = qty;
        this.price = price;
        this.onSale = onSale;
        this.id = +Math.random().toString().slice(2);
    }
}
let cartArr = [
    new CartItem('BasketBall', 1, 69.99, false),
    new CartItem('Golf Club', 1, 139.99, false),
    new CartItem('Carbon fins', 1, 290.0, false),
];
console.log('cartArr ===', cartArr);
function addToCart(arr, item) {
    arr.push(item);
}
const newItem = new CartItem('IceCream', 1, 5, false);
addToCart(cartArr, newItem);
console.log('CartArr ===', cartArr);
const newItem2 = new CartItem('Basball Cap', 1, 29.99, false);
const newItem3 = new CartItem('Baseball', 1, 58.75, false);
addToCart(cartArr, newItem2);
addToCart(cartArr, newItem3);
const id = cartArr[0].id;
function deleteFromCart(arr, idToDelete) {
    arr = arr.filter((cObj) => cObj.id !== idToDelete);
}
console.log('CartArrBeforeDelete ===', cartArr);
deleteFromCart(cartArr, id);
console.log('CartArrAfterDelete ===', cartArr);
const idToUpdate = cartArr[1].id;
function updateTite(arr, idToUpdate, newTitle) {
    arr = arr.map((cObj) => {
        if (cObj.id === idToUpdate) {
            return { ...cObj, title: newTitle };
        }
        else {
            return cObj;
        }
    });
    console.log('arr ===', arr);
}
updateTite(cartArr, idToUpdate, 'Sporbaciai');
console.log('cartArrAfterUpdate ===', cartArr);
//# sourceMappingURL=cart.js.map