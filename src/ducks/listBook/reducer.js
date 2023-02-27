
import {createSlice} from "@reduxjs/toolkit";

const booksState = {
    listData: [],
    isLoading: false,
    error: null
}

const listBooksSlice = createSlice({
    name: 'books',
    initialState: booksState,
    reducers: {
        getDataRequested(state) {
            if (state.isLoading === false) {
                state.isLoading = true;
            }
        },
        getDataSucceed(state, action) {
            if (state.isLoading === true) {
                state.isLoading = false
            }
            state.listData = action.payload;
        },
        getDataFailed(state, action) {
            state.error = action.payload.error;
            state.isLoading = false;
        },
        addNewData(state, action){
            if (state.isLoading === true) {
                state.isLoading = false
            }
            state.listData.next = action.payload.next;
            state.listData.results = [...state.listData.results, ...action.payload.results];
        }
    }
})

export const {getDataRequested, getDataSucceed, getDataFailed, addNewData} = listBooksSlice.actions

export default listBooksSlice.reducer

export const fetchListBooks = (url) => async (dispatch) => {
    dispatch(getDataRequested())
    try {
        const response = await fetch(url)
        const data = await response.json()
        dispatch(getDataSucceed(data))
    } catch (err) {
        dispatch(getDataFailed(err.toString()))
    }
}

export const fetchAddBooks = (url) => async (dispatch) => {
    dispatch(getDataRequested())
    try {
        const response = await fetch(url)
        const data = await response.json()
        dispatch(addNewData(data))
    } catch (err) {
        dispatch(getDataFailed(err.toString()))
    }
}





