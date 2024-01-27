import React, {useState,useEffect} from "react";
import axios from "axios";


import bookLogoText from "../assets/bookLogoText.svg"
import rocket from "../assets/rocket.svg"
import favouriteBook from "../assets/favourite-books.svg"
import notificationIcon from "../assets/notification.svg"
import premiumBook from "../assets/premium.svg"
import profile from "../assets/profileIcon.svg"


const Navbar = ({setBooksData})=>{
    
    let [searchQuery, setSearchQuery] = useState("")

    useEffect(()=>{
        if(searchQuery===""){
            searchQuery="harry potter";
        }
        getBooksData();

    },[])

    async function getBooksData(e){

        e && e.preventDefault();
        try{
            let response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        // console.log(response,response.data,response.data.items);
            setBooksData(response.data.items);
        }
        catch(err){
            alert("No book found!",err);
        }
    }


    return(
        <div className="navbar">
            <div className="logo-div">
                <span><img src={rocket} alt="rocket" ></img></span>
                <span><img src={bookLogoText} alt="keazoN-Books"></img></span>
            </div>



            <div className="searchForm-div">

                <form onSubmit={getBooksData} className="searchForm">
                    <input type="text" placeholder="🔍 Search for the book you want and read it now... Sherlock Holmes 🕵️, Harry Potter 🪄..."
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    >

                    </input>
                    <button>Search</button>
                </form>

            </div>



            <div className="profile-div">
                <span><img src={favouriteBook} alt="favourite-books"></img></span>
                <span><img src={notificationIcon} alt="notification-icon"></img></span>
                <span><img src={premiumBook} alt="premimum"></img></span>
                <span><img id="manIcon" src={profile} alt="profile-icon"></img></span>
            </div>
        </div>
    )
}



export default Navbar