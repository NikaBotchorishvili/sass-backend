import bodyParser from "body-parser";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import options from "./cors";
config();


const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use(cors(options))

app.get("/", (req: Request, res: Response) => {
	return res.json({ message: "Initialization!" });
});

app.listen(PORT, () => {
	console.log(`Listening to PORT: ${PORT}`);
});
