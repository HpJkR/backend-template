import { load } from "ts-dotenv"

// https://github.com/LeoBakerHytch/ts-dotenv

export default load({
	DB_HOST: String,
	DB_PORT: Number,
	DB_USERNAME: String,
	DB_PASSWORD: String,
	DB_NAME: String,
	SERVER_PORT: Number,
	CORS_ALLOWED_ORIGINS: String,
	NODE_ENV: String,
	FRONTEND_URL: String,
})