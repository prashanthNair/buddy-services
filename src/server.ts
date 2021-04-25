import app from './app';
import * as http from 'http';
import { Request, Response, NextFunction } from 'express';
const PORT = 3000;
var host = (app) => {
    app.route("/")
        .get(
            (req: Request, res: Response, next: NextFunction) => {
                console.log("Your host name is " + req.hostname)
            }
        );

}
http.createServer(app).listen(PORT, async () => {
  var hostName= await host(app);
  console.log('Express server listening on host ' + hostName);
    console.log('Express server listening on port ' + PORT);
})
