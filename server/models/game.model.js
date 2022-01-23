const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "A game's name is required!"],
        minlength: [3, "Name's length must be at least 3 characters!"] 
    },

    yearReleased: {
        type: Number,
        //The messages from valids will be accessible after we set our 
        //res.status(400).json(err) in our controller
        required: [true, "Please enter a release year"],
        min: [ 1950, "Please enter a valid year"] 
    },

    genre: {
        type: String,
        required: [true, "Please enter a genre"],
        enum: [
            "Action",
            "Platformer",
            "Survival",
            "RPG",
            "FPS",
            "RTS",
            "MMO",
            "Puzzle",
            "Sports",
            "Adventure",
            "Children's"
        ]
    },

    image:{
        type: String,
        required: [true, "Please include a cover image URL"] //url of image from internet
    },

    rating:{
        type: String,
        enum: [
            "AO",
            "MT",
            "T",
            "E10",
            "E",
            "No rating"
        ]
    },

    company:{
        type: String
    }


}, {timestamps: true})


const Game = mongoose.model("Game", GameSchema);

module.exports = Game;