import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import MovieList from "./MovieList";

function MainSearch() {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const history = useHistory();

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a5afb077d28e258b922e297d299a09f5&query=${query}`;

    try {
      const res = await axios.get(url);
      setSearchData(res.data.results);
      setIsSearch(true);
      setIsShow(false);
      history.push("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        p={6}
        direction="column"
        height="200px"
        bgImage="url('/3.jpg')"
        bgPosition="center"
        justifyContent="space-between"
      >
        <Flex>
          <Text fontSize="3xl" fontWeight="extrabold" as="samp" color="white">
            Welcome...{" "}
            <Text>
              Millions of movies, TV shows and people to discover. Explore now.
            </Text>
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Input
            borderRadius="10px"
            backgroundColor="white"
            variant="unstyled"
            placeholder="Search movies"
            width="100%"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="unstyled"
            borderRadius="10px"
            _hover={{ color: "teal" }}
            color="white"
            bgGradient="linear(to-l, blue.200, yellow.200)"
            ml="5px"
            width="20%"
            onClick={searchMovies}
          >
            Search
          </Button>
        </Flex>
      </Flex>

      <MovieList isShow={isShow} isSearch={isSearch} searchData={searchData} />
    </>
  );
}
export default MainSearch;
