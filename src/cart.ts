interface CartItemIf {
  id: number;
  title: string;
  qty: number;
  price: number;
  onSale: boolean;
}

class CartItem implements CartItemIf {
  id: number;
  title: string;
  qty: number;
  price: number;
  onSale: boolean;

  constructor(title: string, qty: number, price: number, onSale: boolean) {
    this.id = +Math.random().toString().slice(2);
    this.title = title;
    this.qty = qty;
    this.price = price;
    this.onSale = onSale;
  }
}

const CartArr: CartItemIf[] = [
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

function addToCart(arr: CartItemIf[], item: CartItemIf): void {
  arr.push(item);
}

const newItem: CartItemIf = {
  id: 4,
  title: 'IceCream',
  qty: 1,
  price: 5,
  onSale: false,
};

addToCart(CartArr, newItem);
console.log('CartArr ===', CartArr);

const newItem2: CartItemIf = {
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

function deleteFromCart(arr: CartItemIf[], idToDelete: number): void {}
console.log('CartArr ===', CartArr);
