import './Song.css';

function Song({id, title, thumbnail, artist, album, genres, duration}){
    return (
        <div id='song-container'>
            <div className='identifier'>{id}</div>
            <div className='thumbnail-container'>
                <img src={thumbnail} />
            </div>
            <div className='song-artist'>
                <div>{title}</div>
                <div>{artist}</div>
            </div>
            <div className='album-container'>
                <div>{album}</div>
            </div>
            <div className='genres-container'>
                <div>{genres}</div>                
            </div>
            <div className='duration-container'>
                <div>{duration}</div>
            </div>
        </div>
    );
}
export default Song;