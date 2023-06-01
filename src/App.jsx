import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Row from "./Row";
import requests from "./requests";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
	  <Row title="Comedy Movies" fetchUrl={requests.fetcComedyMovies}/>
	  <Row title="Romance Movies" fetchUrl={requests.fetcRomanceMovies}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetcHorrorMovies}/>
    <Row title="Documentary Movies" fetchUrl={requests.fetcDocumentariesMovies}/>
    </div>
  );
}
