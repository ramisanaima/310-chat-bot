import express from 'express';
import { readFile } from 'fs';

const app = express();

const PORT=8080; 

readFile('./index.html', function (err, html) {

    if (err) throw err;    

    app.get('/', (request, response) => {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html); 
        response.end();  
      }).listen(PORT);

});