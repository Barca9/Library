import './bookStyle.css'
import {BookAuthors} from "./BookAuthor/BookAuthors";
import {BookCover} from "./BookCover/BookCover";
import {NavLink} from "react-router-dom";
import {BookTags} from "./BookTags/BookTags";

export const Book = ({book}) => {

    return (
        <div className='book'>
            <NavLink to={`/book/${book.id}`} state={{from: book}} style={{ textDecoration: 'none' }}>
                <BookAuthors author={book.authors}/>
                <BookCover cover={book.formats['image/jpeg']}/>
            </NavLink>
        </div>


    )
}
