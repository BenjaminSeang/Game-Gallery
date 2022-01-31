import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const GameInfoForm = (props) => {
    
    const {game, setGame, submitHandler, errors, buttonText} = props;

    const onChangeHandler = (e)=>{

        const newStateObject = {...game};
        newStateObject[e.target.name]  = e.target.value;

        console.log("e.target.name = ", e.target.name)
        console.log("e.target.value = ", e.target.value)

        setGame(newStateObject);
    }

    return(
        <div className='wrapper'>

            <form onSubmit={submitHandler}>

                <div>
                    <label>Name</label>
                    <input value={game.name} name="name" onChange={(e)=>onChangeHandler(e)} type="text" />

                    {
                        errors.name?
                        <span>{errors.name.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Year Released</label>
                    <input value={game.yearReleased} name="yearReleased" onChange={(e)=>onChangeHandler(e)} type="number" />
                    {
                        errors.yearReleased?
                        <span>{errors.yearReleased.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Genre</label>
                    <select value={game.genre} name="genre" onChange={(e)=>onChangeHandler(e)} name="genre">
                        <option value="none" defaultValue hidden>Select a Genre</option>
                        <option value="Action">Action</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Survival">Survival</option>
                        <option value="RPG">RPG</option>
                        <option value="FPS">FPS</option>
                        <option value="RTS">RTS</option>
                        <option value="MMO">MMO</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Children's">Children's</option>
                    </select>

                    {
                        errors.genre?
                        <span>{errors.genre.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Image</label>
                    <input value={game.image} name="image" onChange={(e)=>onChangeHandler(e)} type="text" />

                    {
                        errors.image?
                        <span>{errors.image.message}</span>
                        :null
                    }
                </div>

                <div>
                    <label>Rating</label>
                    <select value={game.rating} rating="rating" onChange={(e)=>onChangeHandler(e)} name="rating">
                        <option value="none" defaultValue hidden>Select a Rating</option>
                        <option value="AO">AO</option>
                        <option value="MT">MT</option>
                        <option value="T">T</option>
                        <option value="E10">E10</option>
                        <option value="E">E</option>
                        <option value="No Rating">No Rating</option>
                    </select>
                    {
                        errors.rating?
                        <span>{errors.rating.message}</span>
                        :null
                    }

                </div>

                <div>
                    <label>Company</label>
                    <input value={game.company} name= "company" onChange={(e)=>onChangeHandler(e)} type="text" />

                    {
                        errors.company?
                        <span>{errors.company.message}</span>
                        :null
                    }
                </div>

                <button>{buttonText}</button>


            </form>
            
        </div>
    )

}

export default GameInfoForm;