import express from "express";
import cors from "cors";
import compression from "compression";
import path from "path";
import cfg from "./config";
import routes from "./routes";
import HttpsRedirect from "./middleware/HttpsRedirect";
import { fetchWords } from "./services/WordService";

const staticPath = express.static(path.join(__dirname, "../../../client/build"));
const app = express();
app.use(compression());
fetchWords();

cfg.NON_PRODUCTION && app.use("*", cors("*"));

app.use(HttpsRedirect);
routes(app);

app.use(staticPath);
app.use("*", staticPath);

app.listen({ port: cfg.PORT }, () => console.log(`🚀 Server ready at PORT:${cfg.PORT}`));
