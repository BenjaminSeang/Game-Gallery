import React from "react";
import axios from "axios";

const SearchBar = (props) => {

    const {setGameList, searchName, setSearchName} = props;

    const serchByName = (e)=>{
        e.preventDefault();
        if(searchName){
            axios.get(`http://localhost:8000/api/games/namecontains/${searchName}`)
                .then((res)=>{
                    setGameList(res.data);
                    console.log(res);
                    console.log(res.data);
                    setSearchName("");
                })
                .catch((err)=>{
                    console.log(err);
                });
        }
    }

    return(
        <form onSubmit={serchByName}>
            <input className="search-bar" 
                value={searchName} 
                onChange={(e)=>setSearchName(e.target.value)} 
                type="text" />
            <button>Search</button>
        </form>
    )

}

export default SearchBar;


