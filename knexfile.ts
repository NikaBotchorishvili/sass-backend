// Update with your config settings.
import { config } from "dotenv";
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
config();
console.log(process.env.DB_URL);
export default {
	development: {
		client: "postgresql",
		connection: process.env.DB_URL,
		migrations: {
			directory: "./db/migrations/",
		},
	},
	production: {
		client: "postgresql",
		connection: process.env.DB_URL,
		pool: {
			min: 2,
			max: 10,
		},
	},
};
