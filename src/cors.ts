import { CorsOptions } from "cors";

const options: CorsOptions = {
    credentials: true,
	origin: ["http://localhost:8000", "https://*"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"]
}

export default options