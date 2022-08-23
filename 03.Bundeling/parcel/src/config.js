import dotenv from "dotenv";
const result = dotenv.config({ path: "../.env" });
console.log(result.parsed);