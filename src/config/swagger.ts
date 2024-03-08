import { SwaggerOptions } from "swagger-ui-express";

const swaggerOptions: SwaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "SASS Project",
			description:
				"SASS project API for Sweeft digital acceleration program",
			version: "1.0.0",
		},
		servers: [{ url: "http://localhost:8000" }],
	},
	apis: ["../routes/CompanyRouter.ts"],
};

export default swaggerOptions;
