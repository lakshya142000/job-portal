import express from "express";
import path from "path"
import ejsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { LastVisit } from "./src/middlewares/cookie.js";

const app = express();

app.use(express.static(path.join(path.resolve(), 'public')))
// app.use(express.static('public/'));
app.set('views',path.join(path.resolve(), 'src', 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(LastVisit);

app.use(ejsLayouts);

app.use(bodyParser.urlencoded({extended:false}))

export default app;

// Additionals:-
// Recruiter button Done
// Search Functionality Done
// Confirmation Box tried but could not resolve MIME Strict error
// node-mailer implemented
// cookie last visit done
