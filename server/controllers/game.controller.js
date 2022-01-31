const Game = require('../models/game.model');

module.exports = {

    findAllGames: (req, res) =>{
        //use the model to connect to the collection and 
        //find/return all documents from our games collection  
        Game.find()
            .then((allGames)=>{
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=>{
                console.log("Find All Games failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    findAllGamesByName: (req, res) =>{
        let name = req.params.name;
        console.log(name);
        //find all games which their name contains name, option i is for ingnoring cases
        Game.find({"name" : {$regex: name, $options: "i" }})
            .then((allGamesByName)=>{
                console.log(allGamesByName);
                res.json(allGamesByName);
            })
            .catch((err)=>{
                console.log("Find game by name failed")
                res.json({message: "Something went rong in findAllGamesByName", error: err})
            });
    },

    createNewGame: (req, res)=>{
        Game.create(req.body)
            .then((newGame)=>{
                console.log(newGame);
                res.json(newGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewGame");
                //A 400 status means our client is talking 
                //to our server just fine, but the client isn't sending good info.
                res.status(400).json(err);
            })
    },

    findOneGame: (req, res)=>{
        Game.findOne({_id: req.params.id}) 
            .then((oneGame)=>{
                console.log(oneGame);
                res.json(oneGame)
            })
            .catch((err)=>{
                console.log("Find One Game failed");
                res.json({message: "Something went wrong in findOneGame", error: err})
            })
    },

    deleteGame: (req, res)=>{
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=>{
                console.log(deletedGame);
                res.json(deletedGame)
            })
            .catch((err)=>{
                console.log("Delete One Game failed");
                res.json({message: "Something went wrong in deleteOne", error: err})
            })
    },

    updateGame: (req, res)=>{
        //This Mongoose query requires both a parameter AND body from the request
        Game.findOneAndUpdate({_id: req.params.id},
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            {new: true, runValidators: true} 
            )
            .then((updatedGame)=>{
                console.log(updatedGame);
                res.json(updatedGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateGame");
                res.status(400).json(err); 
            })
    }

}


