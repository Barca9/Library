import HomePage from "./components/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BookDetails} from "./components/BookDetails/BookDetails";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/book/:id' element={<BookDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
