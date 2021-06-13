import { useState, createContext, useEffect } from "react";

export const MovieCartContext = createContext();

function MovieCartContextProvider({ children }) {
  const [addMovie, setAddMovie] = useState(() => {
    const localData = localStorage.getItem("addMovie");
    if (localData) {
      return JSON.parse(localData);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("addMovie", JSON.stringify(addMovie));
  }, [addMovie]);

  return (
    <MovieCartContext.Provider
      value={{
        addMovie,
        setAddMovie,
      }}
    >
      {children}
    </MovieCartContext.Provider>
  );
}
export default MovieCartContextProvider;
