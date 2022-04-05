import Cart from '../service/Cart';
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