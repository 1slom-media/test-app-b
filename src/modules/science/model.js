import { fetchAll } from "../../lib/postgres.js";
import { GETSCIENCE } from "./query.js";

const GET = async ({ scienceId = 0 }) => {
  try {
    return await fetchAll(GETSCIENCE, [scienceId]);
  } catch (error) {
    console.log(error);
  }
};

export default {
    GET
}