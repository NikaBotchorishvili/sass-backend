import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
    credentials: true,
	origin: ["http://localhost:8000", "https://*"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"]
}

export default corsOptions