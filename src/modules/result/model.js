import { fetchAll,fetch} from "../../lib/postgres.js";
import {
  GETRESULT,
  POSTRESULT
} from "./query.js";

const GET =  async ({resultId=0},{fullname,u_id,f_id}) => {
  try {
    const result = await fetchAll(GETRESULT, [resultId,fullname,u_id,f_id])
    return result?.map(res => {
      res.faculties = res.faculties[0] == null ? [] : res.faculties
      res.users = res.users[0] == null ? [] : res.users
      return res 
    })
  } catch (error) {
    console.log(error);
  }
};

const POST = async ({user_id,fac_id,blok1_score,blok2_score,total_score}) => {
  try {
    return await fetch(POSTRESULT, [user_id,fac_id,blok1_score,blok2_score,total_score]);
  } catch (error) {
      console.log(error);
  }
};


export default {
  GET,
  POST
};