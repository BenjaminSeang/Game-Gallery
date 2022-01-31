import './App.css';
import NewGame from './components/NewGame';
import AllGames from './components/AllGames';
import OneGame from './components/OneGame';
import EditGame from './components/EditGame';
import {Router} from '@reach/router';


function App() {

  return (
    <div className="App">

      <Router>
        <AllGames path="/" />
        <NewGame path="/new" />
        <OneGame path="/game/:id" />
        <EditGame path="/game/edit/:id" />
      </Router>
      
    </div>
  );
}

export default App;
