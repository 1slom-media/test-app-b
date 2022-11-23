import { fetchAll,} from "../../lib/postgres.js";
import {
  GETFACULTED
} from "./query.js";

const GET =  async ({facultedId=0},{blok1,blok2}) => {
  try {
    const faculties = await fetchAll(GETFACULTED, [facultedId,blok1,blok2])

    return faculties?.map(faculted => {
      faculted.universities = faculted.universities[0] == null ? [] : faculted.universities
      return faculted
    })


  } catch (error) {
    console.log(error);
  }
};


export default {
  GET,
};