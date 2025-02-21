import "./SongList.css";
import Song from "./Song";
import ClockIcon from "./Icons/ClockIcon";

function SongList() {
  let songs = [
    {
      title: "Apt",
      thumbnail:
        "https://www.nme.com/wp-content/uploads/2024/10/blackpink-rose-bruno-mars-apt-credit-John-V-Esparza-1392x884.jpg",
      artist: "Bruno Mars and Rose",
      album: "Album 1 (2025)",
      genres: "Pop",
      duration: "3.11",
    },
    {
      title: "Average Joe",
      thumbnail:
        "https://i0.wp.com/www.indievisionmusic.com/wp-content/uploads/2024/10/averagejoeaspiring.jpg?fit=288%2C215&ssl=1",
      artist: "Joex",
      album: "Album 2 (2000)",
      genres: "Love",
      duration: "3.09",
    },
  ];
  return (
    <section className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Genres</th>
            <th>
              <ClockIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, id) => {
            return (
              <Song
                id={id + 1}
                title={song.title}
                artist={song.artist}
                album={song.album}
                genres={song.genres}
                duration={song.duration}
                thumbnail={song.thumbnail}
                key={id}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  ); // end
}

export default SongList;
