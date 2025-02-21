import "./Song.css";

function Song({ id, title, thumbnail, artist, album, genres, duration }) {
  return (
    <tr className="row">
      <td>{id}</td>
      <td>
        <div className="titleContent">
          <div className="imageWrapper">
            <img className="image" src={thumbnail} alt="thumbnail" />
          </div>
          <div className="songTitle">
            <div>{title}</div>
            <div>{artist}</div>
          </div>
        </div>
      </td>
      <td>{album}</td>
      <td>{genres}</td>
      <td>{duration}</td>
    </tr>
  );
}
export default Song;
