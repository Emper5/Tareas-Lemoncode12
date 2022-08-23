import dotenv from "dotenv";
const result = dotenv.config();

export const { API_BASE } = result.parsed;