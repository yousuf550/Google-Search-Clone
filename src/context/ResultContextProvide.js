import React, { createContext, useState, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // /videos, /search, /images
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    console.log(`API : ${baseUrl}${type}`)
    const data = await response.json();

    if (type.includes("/news")) {
      setResults(data.entries);
      console.log("NEWS",data);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
      console.log("IMAGES",data);
    } else {
      setResults(data.results);
      console.log("SEARCH / VIDEOS",data);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
