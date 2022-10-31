/* eslint-disable */
import React from "react";
import {useEffect, useState} from "react";
import Movie from "./components/movie";
import Filter from "./components/Filter";
import {motion, AnimatePresence} from "framer-motion";

function App() {

  const API_KEY = "e3c3c007c5a9bb15738f37e1971c2d15";
  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect( () => {
    fetchPopular();
  },[])

  const fetchPopular = async () => {
      const data = await fetch(`
      https://api.themoviedb.org/3/movie/popular?api_key=e3c3c007c5a9bb15738f37e1971c2d15
      `);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
      setFilter(movies.results);

  };

  function getMovies(movie){
    return(
      <Movie 
        key={movie.id}
        title={movie.title}
        img={movie.poster_path}
      />
    );
  }

  return (
    <div >
      <Filter 
      popular={popular} 
      setFilter={setFilter}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
      
       />
      <motion.div layout className=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 gap-y-8 rounded-2xl object-cover mb-4">
      <AnimatePresence>
        {filter.map(getMovies)}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
