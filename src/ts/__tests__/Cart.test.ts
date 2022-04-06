import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});

test('add movie in cart', () => {
    const cart = new Cart();
    cart.add(new Movie(100, 'Мстители', 120, 2012, 'США', 'Avengers assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));

    const expected = {
        "_items": [
            {
                "id": 100,
                "name": "Мстители",
                "price": 120,
                "year": 2012,
                "country": "США",
                "slogan": "Avengers assemble!",
                "genre": [
                    "фантастика",
                    "боевик",
                    "фэнтези",
                    "приключения"
                ],
                "time": 137
            }
        ]
    }
    
    expect(cart).toEqual(expected);
});

test('sum', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(100, 'Мстители', 120, 2012, 'США', 'Avengers assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
  
    const expected = 3020;
      
    expect(cart.sum).toBe(expected);
});

test('sum discount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(100, 'Мстители', 120, 2012, 'США', 'Avengers assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));

    const expected = 3000;
      
    expect(cart.sumDiscount(20)).toBe(expected);
});

test('cart delete', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(100, 'Мстители', 120, 2012, 'США', 'Avengers assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    cart.delete(1008);
    
    const expected = [
        {
            "id": 1001,
            "name": "War and Piece",
            "author": "Leo Tolstoy",
            "price": 2000,
            "pages": 1225
        },
        {
            "id": 100,
            "name": "Мстители",
            "price": 120,
            "year": 2012,
            "country": "США",
            "slogan": "Avengers assemble!",
            "genre": [
                "фантастика",
                "боевик",
                "фэнтези",
                "приключения"
            ],
            "time": 137
        }
    ]
      
    expect(cart.items).toEqual(expected);
});