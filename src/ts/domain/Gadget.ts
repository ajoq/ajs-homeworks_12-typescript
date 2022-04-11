import Buyable from './Buyable';

export default class Gadget implements Buyable {
    quantity: number;
    
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
    ) {
        this.quantity = 1;
     }
}