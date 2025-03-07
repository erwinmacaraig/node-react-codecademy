import "./SongList.css";
import Song from "./Song";
import ClockIcon from "./Icons/ClockIcon";

function SongList({songs}) {  
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
                genre={song.genre}
                duration={song.duration}
                coverImage={song.coverImage}
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
