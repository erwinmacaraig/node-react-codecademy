import './SongList.css';
import Song from "./Song";


function SongList(){
    let songs = [
        { title: 'Apt',
          thumbnail: 'https://www.nme.com/wp-content/uploads/2024/10/blackpink-rose-bruno-mars-apt-credit-John-V-Esparza-1392x884.jpg',
          artist: 'Bruno Mars and Rose',
          album: 'Album 1 (2025)', 
          genres: 'Pop',
          duration: '3.11'
        },
        {   title: 'Average Joe',
            thumbnail: 'https://i0.wp.com/www.indievisionmusic.com/wp-content/uploads/2024/10/averagejoeaspiring.jpg?fit=288%2C215&ssl=1',
            artist: 'Joex',
            album: 'Album 2 (2000)', 
            genres: 'Love',
            duration: '3.09'
          }
    ];
    return ( 
        <>
        <div className="songlist-container">
            <div className='id-header'>#</div>
            <div className='title-header'>Title</div>
            <div className='album-header'>Album</div>
            <div className='genres-header'>Genres</div>
            <div className='duration-header'>Duration</div>
        </div>
        <hr />
        {
            songs.map((song, id) => {
                return <Song id={id + 1} title={song.title} artist={song.artist} album={song.album} genres={song.genres} duration={song.duration} thumbnail={song.thumbnail} key={id} />
            })
        }
        </>       
        
        

    );
}

export default SongList; 
