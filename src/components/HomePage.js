import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchListBooks, fetchAddBooks} from "../ducks/listBook/reducer";
import {selectorBooksList} from "../ducks/listBook/selectors";
import {Book} from "./Book/Book";
import {Preloader} from "./Preloader/Preloader";
import {SearchInput} from "./SearchInput/SearchInput";
import {URL_GET_BOOKS_LIST} from "../constants/urlConstants";
import './HomePage.css'
import '../style/nullStyle.css'


const HomePage = () => {

    console.log(process.env.VERSION)


    const dispatch = useDispatch()
    const bookList = useSelector(selectorBooksList).results
    const data = useSelector(selectorBooksList)

    useEffect(() => {
        console.log('1 useEffect')
        dispatch(fetchListBooks(URL_GET_BOOKS_LIST))
    }, [])

    const fetchDataOnScroll = (e) => {
       if (e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight){
            console.log('scrolling!!!!!!!!')
           dispatch(fetchAddBooks(data.next))
        }
    }

    //const renderBookList = () => bookList.map(bookItem => <Book key={bookItem.id} book={bookItem}/>)

    return (
        <div>
            <SearchInput/>
            <div>
                {bookList
                    ?
                    <div className='books' onScroll={fetchDataOnScroll}>
                     {bookList.map(bookItem => (
                            <Book key={bookItem.id} book={bookItem}/>
                        ))}
                    </div>
                    : <Preloader/>
                }
            </div>
        </div>
    )
}

export default HomePage