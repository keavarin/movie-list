import React, { useState, useEffect, useContext } from "react";
import { MovieCartContext } from "../../../contexts/MovieCartContextProvider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Box,
  Image,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Text,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function PriceInput({ value, setValue }) {
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  return (
    <NumberInput
      onChange={(value) => setValue(parse(value))}
      value={format(value)}
      min={0}
      max={100}
      size="sm"
      maxW={100}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

function MovieCard({ movie }) {
  const [value, setValue] = useState(5);
  const { addMovie, setAddMovie } = useContext(MovieCartContext);
  // console.log("addMv", addMovie);

  const onAddMovie = (movie) => {
    const index = addMovie.findIndex((item) => item.id === movie.id);

    if (index === -1) {
      setAddMovie([...addMovie, movie]);
    } else {
      const newMovie = [...addMovie];
      newMovie[index].price = movie.price;
      setAddMovie(newMovie);
    }
  };

  return (
    <>
      <Flex m={3} p={1} direction="column">
        <Image
          shadow="2xl"
          borderRadius="10px"
          w="100%"
          objectFit="fill"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />

        <Flex justifyContent="flex-start">
          <CircularProgress
            value={movie.vote_average}
            color={movie.vote_average >= 6 ? "green.300" : "yellow.300"}
            max={10}
            thickness="12px"
            top="-3"
          >
            <CircularProgressLabel>{movie.vote_average}</CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Box align="left">
          <Text fontWeight="extrabold" fontSize="lg" as="samp" color="black">
            {movie.title}
          </Text>
        </Box>
        <Box align="left">
          <Text fontSize="sm">{movie.release_date}</Text>
        </Box>

        <Box align="center">
          <PriceInput maxW={100} value={value} setValue={setValue} />
          <Button
            _hover={{ color: "black" }}
            color="white"
            backgroundColor="teal"
            m={2}
            maxW={120}
            disabled={value <= 0}
            onClick={() => onAddMovie({ ...movie, price: +value })}
          >
            <ShoppingCartIcon />
            Add movie
          </Button>
        </Box>
      </Flex>
    </>
  );
}
export default MovieCard;
