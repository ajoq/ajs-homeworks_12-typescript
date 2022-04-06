import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(100, 'Мстители', 120, 2012, 'США', 'Avengers assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));

console.log(cart.items);