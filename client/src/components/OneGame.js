import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Header from './Header';
import GoBackToHomeButton from './GoBackToHomeButton';




const OneGame = (props) =>{

    const {id} = props;
    const [game, setGame] = useState({})

    //get the game upon start
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGame(res.data);

            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const deleteGame = () =>{

        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)
            })

    }


    return(
        <div className='wrapper'>
            <header>
                <Header titleText = {game.name}/>
                <GoBackToHomeButton/>             
            </header>
            <div style={{margin: '10px'}}>
                <img src={game.image} alt="game image"/>
                <p>Genre: {game.genre}</p>
                <p>Year Released: {game.yearReleased}</p>
                <p>Rating: {game.rating}</p>
                <p>Publisher: {game.company}</p>

                <button onClick={deleteGame}>
                    Delete {game.title}
                </button>
            </div>

            
        </div>
    )
}


export default OneGame;