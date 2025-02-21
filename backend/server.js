const http = require('http');
const querystring = require('querystring');
const songs = require("./models/song");
const genres = require("./models/genre");

const handleGetRequest = (req, res) => {
    // console.log('*****', req.url);
     const  url  = req.url;    
    //  console.log(url);
     const [pathname, queries] = url.split('?');
    // http://localhost:8081/songs
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

                    break;
                    case 'artist':

                    break;
                    case 'genre':
                        console.log('To process genre');
                    break;
                    case 'year':

                    break;
                    default:
                        return res.end(fieldOption.toLowerCase());
                    
                }
            } else {
                return res.end('No search keyword provided');
            }
        }
        // return res.end('OK');
    } else {
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
    const { address, port } = server.address();
    console.log(`Server is waiting for connections on: http://${address}:${port}`);
});

server.on('connection', (stream) => {
    console.log('Connected!');
});
