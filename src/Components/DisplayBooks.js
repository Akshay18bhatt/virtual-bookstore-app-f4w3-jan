import React from "react";


const DisplayBooks= ({booksData,bookDetails ,setBookDetails})=>{
    // console.log(booksData);

    function bookClicked(book){
        setBookDetails({...bookDetails,
            imgUrl:book.volumeInfo.imageLinks.thumbnail,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            publisedDate: book.volumeInfo.publishedDate,
            description: book.volumeInfo.description,
            avgRating: (book.volumeInfo.averageRating) || 0,
            ratingCount: (book.volumeInfo.ratingsCount) || 0,
            Publisher: book.volumeInfo.publisher || "Self",
            language: book.volumeInfo.language,
            previewLink: book.volumeInfo.previewLink,
            infoLink: book.volumeInfo.infoLink
        })
           
    }
    console.log(bookDetails);

    return(

        <div className="display-books-div">
            {booksData.map(element => 
                <div key={element.id} onClick={()=>bookClicked(element)} className="each-book-div">
                    <div className="book-img-div"><img src={element.volumeInfo.imageLinks.thumbnail} ></img></div>
                </div>
            )
            }
        </div>
    )
}

export default DisplayBooks