
import {configureStore} from "@reduxjs/toolkit";
import booksReducer from '../ducks/listBook/reducer'



const store = configureStore({
    reducer: {
        books: booksReducer,
    }
})

export default store