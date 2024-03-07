import { config } from "dotenv";
import express, { Request, Response } from "express";

config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req: Request, res: Response) => {
	return res.json({ message: "Initialization!" });
});

app.listen(PORT, () => {
	console.log(`Listening to PORT: ${PORT}`);
});