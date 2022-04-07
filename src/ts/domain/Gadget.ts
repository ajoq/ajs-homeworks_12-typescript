import Buyable from './Buyable';

export default class Gadget implements Buyable {
    price: number;
    quantity: number;

    constructor(
        readonly id: number,
        readonly name: string,
        price: number,
        quantity: number,
    ) {
        this.price = price;
        this.quantity = quantity;
     }
}