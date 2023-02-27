import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchListBooks} from "../../ducks/listBook/reducer";
import {URL_GET_BOOKS_LIST} from "../../constants/urlConstants";
import './SearchInput.css'

export const SearchInput = () => {

    const [value, setValue] = useState(' ')
    const dispatch = useDispatch()

    const changeHandler = (event) => setValue(event.target.value)

    const searchOnClick = () => {
        const str = value.trim().replace(' ','%20')
        dispatch(fetchListBooks(`https://gutendex.com/books?search=${str}`))
    }

    useEffect(()=>{
        console.log('2 useEffect')
        if (value.length === 0){
            dispatch(fetchListBooks(URL_GET_BOOKS_LIST))
        }
    },[value, dispatch])

    return (
        <div className='search'>
            <input
                onChange={changeHandler}
                value={value}
                className='search-input'
            />
            <button onClick={searchOnClick} className='search-button'>Поиск</button>
        </div>
    )
}