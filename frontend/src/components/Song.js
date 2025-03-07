import "./Song.css";

function Song({ id, title, coverImage, artist, album, genre, duration }) {
  return (
    <tr className="row">
      <td>{id}</td>
      <td>
        <div className="titleContent">
          <div className="imageWrapper">
            <img className="image" src={coverImage} alt="thumbnail" />
          </div>
          <div className="songTitle">
            <div>{title}</div>
            <div>{artist}</div>
          </div>
        </div>
      </td>
      <td>{album}</td>
      <td>{
        genre.map((genre) => {         
          return (
            <>
              <span>{genre}</span>
              <br />
            </>
          )
        })   
      }</td>
      <td>{duration}</td>
    </tr>
  );
}
export default Song;
