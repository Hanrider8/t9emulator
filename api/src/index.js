import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import cfg from './config';
import routes from './routes';
import { fetchWords } from './services/WordService';

const staticPath = express.static(path.join(__dirname, '../../../client/build'));
const app = express();
app.use(compression());

cfg.NON_PRODUCTION && app.use('*', cors('*'));

fetchWords();
routes(app);

app.use(staticPath);
app.use('*', staticPath);

app.listen({ port: cfg.PORT }, () => console.log(`🚀 Server ready at PORT:${cfg.PORT}`));
