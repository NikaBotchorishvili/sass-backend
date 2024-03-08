import bodyParser from "body-parser";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import corsOptions from "./config/cors";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import swaggerOptions from "./config/swagger";

import companyRouter from "./routes/CompanyRouter";
config();

const specs = swaggerJSDoc(swaggerOptions);

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use("/company", companyRouter);
app.use("/docs", serve, setup(specs));

app.get("/", (req: Request, res: Response) => {
	return res.json({ message: "Initialization!" });
});

app.listen(PORT, () => {
	console.log(`Listening to PORT: ${PORT}`);
});
