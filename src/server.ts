import app from './app';
import * as http from 'http'; 
const PORT = 3000;
 
http.createServer(app).listen(PORT, () => {
    console.log(app)
    console.log('Express server listening on port ' + PORT);
})