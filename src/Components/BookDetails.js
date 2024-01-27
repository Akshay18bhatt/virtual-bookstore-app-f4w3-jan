import React from "react";



const BookDetails=({bookDetails})=>{

    return(
        <div className="book-details-div">

            <div>
                <img src={bookDetails.imgUrl}></img>
            </div>

            <div  className="info-div">
                <div>
                    <h1>{bookDetails.title}</h1>
                </div>
                <div className="author">
                    <h2>Author: {bookDetails.author}</h2>
                    <p>Published On: {bookDetails.publisedDate}</p>
                </div>
                <div className="description">
                    <p>Description: {bookDetails.description}</p>
                </div>
                <div className="rating">
                    <span>Avg Rating: {bookDetails.avgRating}</span>
                    <span>Rating Count: {bookDetails.ratingCount}</span>
                    <span>Publisher: {bookDetails.Publisher}</span>
                    <span>Language: {bookDetails.language}</span>
                </div>
                <div className="btns">
                    <a href={bookDetails.previewLink}><button>Read Now</button></a>
                    <a href={bookDetails.infoLink}><button>More Info</button></a>
                </div>
            </div>


        </div>
    )
}

export default BookDetails


// setBookDetails({...bookDetails,
//     imgUrl:book.volumeInfo.imageLinks.thumbnail,
//     title: book.volumeInfo.title,
//     author: book.volumeInfo.authors[0],
//     publisedDate: book.volumeInfo.publishedDate,
//     description: book.volumeInfo.description,
//     avgRating: (book.volumeInfo.averageRating) || 0,
//     ratingCount: (book.volumeInfo.ratingsCount) || 0,
//     Publisher: book.volumeInfo.publisher,
//     language: book.volumeInfo.language,
//     previewLink:book.volumeInfo.previewLink,
//     infoLink:book.volumeInfo.infoLink
// })