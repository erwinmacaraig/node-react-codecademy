const http = require('http');
const querystring = require('querystring');
const songs = require("./models/song");
const genres = require("./models/genre");

const DEFAULT_HEADER = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };


const handleGetRequest = (req, res) => {
    res.writeHeader(200, DEFAULT_HEADER);    
     const  url  = req.url;
     const [pathname, queries] = url.split('?');
    
    if(pathname == '/songs') {       
        if (queries !== undefined) {
            let parsedQueries = querystring.parse(queries);
            let searchKey;
            if('q' in parsedQueries) {
                let page = 1;
                let limit = 50;
                searchKey = parsedQueries['q'];

                if ('page' in parsedQueries) {
                    page =  parseInt(parsedQueries['page']);
                }
                if ('limit' in parsedQueries) {
                    limit = parseInt(parsedQueries['limit']);
                }
                //search fields

                let fieldOption = parsedQueries['field'];
                console.log(fieldOption.toLowerCase());
                let songData = [];
                switch(fieldOption.toLowerCase()){
                    case 'title':
                        songs.searchByTitle(searchKey, page, limit).then((data) => {                           
                            res.write(JSON.stringify(data));
                            return res.end();
                        }).catch(e => {
                            console.log(e);
                        });
                       
                    break;
                    case 'album':
                        songs.searchByAlbum(searchKey, page, limit).then((data) => {                           
                            res.write(JSON.stringify(data));
                            return res.end();
                        }).catch(e => {
                            console.log(e);
                        });
                    break;
                    case 'artist':
                        songs.searchByArtist(searchKey, page, limit).then((data) => {                           
                            res.write(JSON.stringify(data));
                            return res.end();
                        }).catch(e => {
                            console.log(e);
                        });
                    break;
                    case 'genre':
                        songs.searchByGenre(searchKey, page, limit).then((data) => {                           
                            res.write(JSON.stringify(data));
                            return res.end();
                        }).catch(e => {
                            console.log(e);
                        });
                    break;
                    case 'year':
                        songs.searchByYear(searchKey, page, limit).then((data) => {                           
                            res.write(JSON.stringify(data));
                            return res.end();
                        }).catch(e => {
                            console.log(e);
                        });
                    break;
                    default:
                        
                        return res.end(fieldOption.toLowerCase());
                    
                }
            } else {
                return res.end('No search keyword provided');
            }
        } else {
            songs.findAll().then((data) => {
                res.write(JSON.stringify(data));
                return res.end();
            }).catch(e => {
                console.log(e);
            });
        }
        // return res.end('OK');
    } else if(pathname == '/genres') {
        genres.findAll().then((data) => {
            res.write(JSON.stringify(data));
            return res.end();
        }).catch(e => {
            console.log(e);
        });
    } 
    else {
        return res.end('Not found');
    }
    
}

// create a sercver
const server = http.createServer((req, res) => {
    // handle routes here
    const {method} = req;
    console.log(method);
    switch(method){
        case 'GET':
            handleGetRequest(req, res);
        break;
        case 'POST':
            handlePostRequest(req, res);
        break;
        
    }

});

server.listen(8081, () => {
    const { port, address } = server.address();
    console.log(`Server is waiting for connections on: http://${address}${port}`);
});

server.on('connection', (stream) => {
    console.log('Connected!');
});
