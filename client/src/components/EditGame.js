import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import GameInfoForm from './GameInfoForm';
import Header from './Header';
import GoBackToHomeButton from './GoBackToHomeButton';


const EditGame = (props)=>{

    const {id} = props;

    const [errors, setError] = useState({})

    const [editedGame, setEditedGame] = useState({
        name: "",
        yearReleased: "",
        genre: "",
        image: "",
        rating: "",
        company: ""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEditedGame(res.data)
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])

    const submitHandler = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/games/${id}`, editedGame)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setError(err.response.data.errors)

            })
    }


    return(
        <div className='wrapper'>
            <header>
                <Header titleText={"Edit " + editedGame.name} />
                <GoBackToHomeButton/>
            </header>
            
            <GameInfoForm 
                game = {editedGame}
                setGame = {setEditedGame}
                submitHandler = {submitHandler}
                errors = {errors}
                buttonText = {"Edit Game"}
            />
        </div>
    )
}


export default EditGame;