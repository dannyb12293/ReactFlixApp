import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './Components/MovieList';
import Heading from './Components/Heading';
import SearchBox from './Components/SearchBox';
import Favorites from './Components/Favorites';
import RemoveFavorite from './Components/RemoveFavorite';
import MovieSlider from './Components/MovieSlider';


const App = () => {
  const [movies, setMovies] = useState ([]);
  const [favorites, setFavorites ] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f8ea67f9`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
    setMovies(responseJson.Search);
    }
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue]);
  
  useEffect(()=> {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    );
    if (movieFavorites){
          setFavorites(movieFavorites);
    }
  }, []);
    

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='React Flix'/> 
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        
      </div>
      <div>
        <MovieSlider />
      </div>
      <Heading heading="Movies" />
      <div className='row'>
        <MovieList
         movies = {movies} 
         handleFavoritesClick={addFavoriteMovie} 
         favoriteComponent={Favorites}/> 
        
      </div>


      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading='Watch List'/> 
    </div>
    
    <div className='row'>
        <MovieList
         movies = {favorites} 
         handleFavoritesClick={removeFavoriteMovie} 
         favoriteComponent={RemoveFavorite}/> 
         </div>


    
    </div>
  );
};

export default App;

  