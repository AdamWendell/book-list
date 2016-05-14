import { combineReducers } from 'redux';
import books from './reducer_books'
import ActiveBook from './reducer_active_book'
const rootReducer = combineReducers({
  books: books,
  activeBook: ActiveBook
});

export default rootReducer;
