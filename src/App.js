import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import DisplayBooks from "./Components/DisplayBooks";
import "./stylee.css" 
import BookDetails from "./Components/BookDetails";


const App= ()=>{

    const [booksData, setBooksData]= useState([]);
    const [bookDetails, setBookDetails] = useState({
        imgUrl:"",
        title:"",
        author:"",
        publisedDate:"",
        description:"",
        avgRating:"",
        ratingCount:"",
        Publisher:"",
        language:"",
        previewLink:"",
        infoLink:""
    })

    return(
        <div>
            <Navbar setBooksData={setBooksData} />
            {bookDetails.title && <BookDetails bookDetails={bookDetails} />}
            <DisplayBooks booksData={booksData} bookDetails={bookDetails} setBookDetails={setBookDetails} />
        </div>
    )
}

export default App