interface CartItemIf {
  id: number;
  title: string;
  qty: number;
  price: number;
  onSale: boolean;
}

class CartItem implements CartItemIf {
  public id: number;

  constructor(
    public title: string,
    public qty: number,
    public price: number,
    public onSale: boolean
  ) {
    this.id = +Math.random().toString().slice(2);
  }
}

const CartArr: CartItemIf[] = [
  new CartItem('BasketBall', 1, 69.99, false),
  new CartItem('Golf Club', 1, 139.99, false),
  new CartItem('Carbon fins', 1, 290.0, false),
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
