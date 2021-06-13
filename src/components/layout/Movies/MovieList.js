import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

function MovieList({ searchData, isSearch, isShow }) {
  const [list, setList] = useState([]);

  const fetchMenuList = async () => {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=a5afb077d28e258b922e297d299a09f5&query=a";
    try {
      const res = await axios.get(url);
      setList(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMenuList();
  }, []);

  return (
    <>
      {isSearch && (
        <SimpleGrid p={5} columns={5} spacing={3} backgroundColor="red.50">
          {searchData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      )}

      {isShow && (
        <SimpleGrid p={5} columns={5} spacing={3} backgroundColor="red.50">
          {list.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
export default MovieList;
