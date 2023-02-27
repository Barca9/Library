import {useLocation} from "react-router-dom";
import {BookAuthors} from "../Book/BookAuthor/BookAuthors";
import {BookCover} from "../Book/BookCover/BookCover";
import {BookTags} from "../Book/BookTags/BookTags";

export const BookDetails = ({}) => {

    const location = useLocation()
    const { state } = location
    const bookData = state.from

    return (
        <div>
            <div>{bookData.title}</div>
            <div>Скачано {bookData.download_count} раз</div>
            <BookAuthors author={bookData.authors}/>
            <BookCover cover = {bookData.formats['image/jpeg']}/>
            <BookTags tags = {bookData}/>
        </div>
    )
}
