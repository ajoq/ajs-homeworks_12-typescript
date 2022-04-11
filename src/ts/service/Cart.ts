import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {

        const currentItem = this._items.find(el => el.id === item.id);

        if (currentItem) {
            
            if (item.quantity && currentItem.quantity) {
                currentItem.quantity += item.quantity;
                currentItem.price = item.price * currentItem.quantity;
            }

        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get sum(): number {
        let sum = 0;
        for (const item of this._items) {
            sum += item.price;
        }
        return sum;
    }

    sumDiscount(discount: number) {
        return this.sum - discount;
    }

    remove(id: number):void {
        this._items = this._items.filter(item => item.id != id);
    }

    minus(id: number): void {
        const itemId = this._items.find(el => el.id === id);
        if (itemId && itemId.quantity) {
            itemId.price -= itemId.price / itemId.quantity;
            itemId.quantity -= 1; 
        }
    }
}