import React from 'react'
import MovieCard from './movieCard'

const moviesList = ({movies,inputSearch , rateSearch , show , setShow}) => {
    const styleContainer = {display :'flex' , flexWrap : 'wrap' , justifycontent : 'space-around'};
console.log(inputSearch)
    console.log(movies)
    console.log(show);
  return (
    <div style={styleContainer}>
    {
        rateSearch===0 ?
        movies
 .filter((movie) => movie.title.toLowerCase().includes(inputSearch.toLowerCase().trim()))
 .map((movie) => <MovieCard movie={movie}  key={movie.id}  show={show} setShow={setShow} />)
 :
movies
 .filter((movie) => movie.title.toLowerCase().includes(inputSearch.toLowerCase().trim()) && movie.rate===rateSearch )
 .map((movie) => <MovieCard movie={movie}  key={movie.id}  show={show} setShow={setShow} />)

    }
    </div>

  )
}

export default moviesList
