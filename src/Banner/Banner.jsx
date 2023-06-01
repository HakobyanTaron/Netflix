import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.scss";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios(requests.fetchNetflixOriginals)
    .then(response => setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]))
  }, [])

  const trancate = (text, smblCount) => {
    if(text?.lenght > smblCount){
        return text.slice(0 , 150) + "..."
    }else{
        return text
    }
  }
  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contects">
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {trancate(movie?.overview , 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}
