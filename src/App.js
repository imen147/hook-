import "./App.css";
import { Data } from "./Data";
import { Movieliste } from "./components/Movieliste";
import Header from "./components/Header";
import Addmovie from "./Addmovie";
import { useState } from "react";
import Search from "./components/Search";


function App() {
  const [listFilms, setListFilms] = useState(Data);
  const HundleAdd = (newmovie) => {
    setListFilms([...listFilms, newmovie]);
  };

  const [searchByName, setSearchByName] = useState("");
  function getSearchByName(SearchValue) {
    setSearchByName(SearchValue);
  }
  const [valueByrate, setValueByrate] = useState(0);
  function getfilterByrate(ratevalue) {
    setValueByrate(ratevalue)
  }

  return (
    <div className="App">
      <div
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-fashion-movie-film-theme-background-poster-image_194919.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Search setSearchByName={getSearchByName} getfilterByrate={getfilterByrate} />
        <Addmovie HundleAdd={HundleAdd} />
        <Movieliste Data={listFilms.filter((film) =>
        film.title.toUpperCase().includes(searchByName.toUpperCase())
        &&
         film.rate>=valueByrate )}
        
        />


      </div>
    </div>
  );
}

export default App;
