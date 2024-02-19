"use strict";
class CartItem {
    constructor(title, qty, price, onSale) {
        this.title = title;
        this.qty = qty;
        this.price = price;
        this.onSale = onSale;
        this.id = +Math.random().toString().slice(2);
    }
}
const CartArr = [
    {
        id: 1,
        title: 'BAsketBall',
        qty: 1,
        price: 69.99,
        onSale: false,
    },
    {
        id: 1,
        title: 'Golf Club',
        qty: 1,
        price: 139.99,
        onSale: false,
    },
    {
        id: 1,
        title: 'CArbon fins',
        qty: 1,
        price: 290,
        onSale: true,
    },
];
console.log('CartArr ===', CartArr);
function addToCart(arr, item) {
    arr.push(item);
}
const newItem = {
    id: 4,
    title: 'IceCream',
    qty: 1,
    price: 5,
    onSale: false,
};
addToCart(CartArr, newItem);
console.log('CartArr ===', CartArr);
const newItem2 = {
    id: 4,
    title: 'Basball Cap',
    qty: 1,
    price: 29.99,
    onSale: false,
};
const newItem3 = new CartItem('Baseball', 1, 58.75, false);
console.log('newItem3 ===', newItem3);
addToCart(CartArr, newItem2);
addToCart(CartArr, newItem3);
function deleteFromCart(arr, idToDelete) { }
console.log('CartArr ===', CartArr);
//# sourceMappingURL=cart.js.map