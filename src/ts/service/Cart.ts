import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {

        const currentItem = this._items.find(el => el.id === item.id);

        if (currentItem) {
            
            if (item.quantity && currentItem.quantity) {
                currentItem.quantity += item.quantity;
                currentItem.price *= currentItem.quantity;
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

    remove(id: number): void {
        this._items.forEach((item, index, array) => {
            if (id === item.id) {
                array.splice(index, 1);
            }
        });
    }

    minus(id: number): void {
        this._items.forEach((item, index, array) => {
            if (id === item.id) {

                if (item.quantity) {
                    const piecePrice: number = item.price / item.quantity;
                    item.quantity -= 1;
                    item.price -= piecePrice;
                }
            }
        });
    }
}