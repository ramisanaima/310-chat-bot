import express, { static } from 'express';
import { join } from 'path';

var app = express();

app.use(static(join(__dirname, RELATIVE_CLIENT_WEBSITE_DIR_WHERE_INDEX_FILE_IS)));

app.listen(PORT);