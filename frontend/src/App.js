import SongList from "./components/SongList";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";


function App() {
  
  let songListing = [
    {
      title: "Apt",
      coverImage:
        "https://www.nme.com/wp-content/uploads/2024/10/blackpink-rose-bruno-mars-apt-credit-John-V-Esparza-1392x884.jpg",
      artist: "Bruno Mars and Rose",
      album: "Album 1 (2025)",
      genre: ["Pop", "Culture"],
      duration: "3.11",
    },
    {
      title: "Average Joe",
      coverImage:
        "https://i0.wp.com/www.indievisionmusic.com/wp-content/uploads/2024/10/averagejoeaspiring.jpg?fit=288%2C215&ssl=1",
      artist: "Joex",
      album: "Album 2 (2000)",
      genre: ["Love"],
      duration: "3.09",
    },
    {
      title: "Another Song",
      coverImage:
        "https://i0.wp.com/www.indievisionmusic.com/wp-content/uploads/2024/10/averagejoeaspiring.jpg?fit=288%2C215&ssl=1",
      artist: "Sample",
      album: "Album 3 (2025)",
      genre: ["Love"],
      duration: "3.09",
    },
  ];
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/songs`, { 
      method: 'get',    
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data['results']);
      setSongs(data['results']);
    })
  }, []);


  const handleSearchButtonClick = (searchTerm, field) => {
      console.log(`Searching the "${field}": "${searchTerm}"`);
      const queryParamters = {
        'q': searchTerm,
        'field': field
      };
      const queryString = new URLSearchParams(queryParamters).toString();

      fetch(`http://localhost:8081/songs?${queryString}`, {
        method: 'get',    
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {        
        setSongs(data['results']);
      })
  }
  return (
    <>
      <SearchBar onClickFxn={handleSearchButtonClick}/>
      <SongList songs={songs} />
    </>
  );
}

export default App;
