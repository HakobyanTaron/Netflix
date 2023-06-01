import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { IoIosClose } from "react-icons/io";
import React, { useState, useEffect , useRef } from "react";
import "./Row.scss";

const base_url = "https://image.tmdb.org/t/p/w500/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [timeToPlay, setTimeToPlay] = useState(false);

  const opts = {
    height: "490",
    width: "60%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const data = response.data.results;
      setMovies(data);
    }
    fetchData();
  }, []);

  const handleClick = (movie) =>{
    if(trailerUrl){
        setTrailerUrl("")
    }else{
        movieTrailer(movie?.title || movie?.name || "")
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get("v"))
        })
        .catch(err => console.log(err))
    }
  }

  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 10,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" ref={elRef}>
        {movies.map((elem) => {
          return (
            <img
              className="row__poster row_posterlarge"
              key={elem.id}
              src={`${base_url}${elem.poster_path}`}
              alt={elem.title}
              onClick={() => {
                setTimeToPlay(true)
                handleClick(elem)
              }}
            />
          );
        })}
      </div>
      {trailerUrl && timeToPlay ? (
        <div className="video_box">
          <span onClick={() => setTimeToPlay(false)}>
            <IoIosClose />
          </span>
          <YouTube
            videoId={trailerUrl}
            onEnd={() => setTimeToPlay(false)}
            opts={opts}
            className="player"
          />
        </div>
      ) : null}
    </div>
  );
}
