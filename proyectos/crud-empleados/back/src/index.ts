import express, {type Request, type Response} from "express";
import { AppRoutes } from "./routes/routes.js";
import cors from 'cors'

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use(AppRoutes.routes);

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})