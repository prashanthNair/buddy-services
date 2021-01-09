import app from './app';
import * as http from 'http'; 
const PORT = 3002;
 
http.createServer(app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})