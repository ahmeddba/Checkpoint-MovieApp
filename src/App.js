import React , {useState}from 'react';
import './App.css';
import Navigate from './Components/Navigate/Navigate';
import MovieCard from './Components/Movies/movieCard';
import MoviesList from './Components/Movies/moviesList';
import  { moviesData } from './Data'
import Reactstars from 'react-stars'

function App() {
const [moviesList , setMoviesList] = useState(moviesData);
const [inputSearch , setInputSearch] = useState('');
const [rateSearch , setRateSearch] = useState(0);
const [show , setShow]  = useState(false);
const add = (movie) => {
  setMoviesList([...moviesList , movie]);
}
console.log(moviesList);
console.log(inputSearch)
  return (
    <div className="App">
<Navigate setInputSearch={setInputSearch} setRateSearch={setRateSearch} movieList={moviesList} setMoviesList={setMoviesList} add={add} />
<h3 style={{color : 'white' , textAlign : 'left'}}> Filter by rate</h3>
<Reactstars count={5} onChange={(e) => setRateSearch(e)}  value={rateSearch} size={35} half={false}/>
<MoviesList movies={moviesList} inputSearch={inputSearch} rateSearch={rateSearch} show={show} setShow={setShow} />
    </div>
  );
}

export default App;
