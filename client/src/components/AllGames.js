import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import Header from './Header';
import SearchBar from './SearchBar';


const AllGames = (props) =>{


    const [gameList, setGameList] = useState([]);
    const [searchName, setSearchName] = useState("");
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/games")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    } , [])

    const deleteGame = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/games/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(gameList.filter((game, index)=>game._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))

    }

    return(
        <div className ="wrapper">

            <header>
                <Header titleText={"Game Gallery"} />
                <SearchBar setGameList={setGameList} searchName={searchName} setSearchName={setSearchName}/>
                <button>
                    <Link to={"/new"}>Add a New Game</Link>
                </button>
            </header>
            <div className = "gameGallery">
                {
                    gameList.map((game, index)=>(
                        <div className = "gameCard" key={index}>
                            <Link to={`/game/${game._id}`}>
                                <p>{game.name}</p>
                                <img src={game.image} alt="Game picture" 
                                style={{width:"150px", height:"150px"}} />
                            </Link>

                            <div>
                                <button>
                                    <Link to={`/game/edit/${game._id}`}>Edit</Link>
                                </button>
                                <button onClick={()=> deleteGame(game._id)}>
                                    Delete
                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default AllGames;