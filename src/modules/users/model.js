import { fetch, fetchAll } from "../../lib/postgres.js";
import { LOGIN, REGISTER, GETUSERS } from "./query.js";

const GET = async ({ userId = 0 }) => {
  try {
    const users= await fetchAll(GETUSERS, [userId]);
    return users?.map(user => {
      user.result = user.result[0] == null ? [] : user.result
      return user
    })
  } catch (error) {
    console.log(error);
  }
};

const LOGINMODEL = async ({ username, password }) => {
  try {
    return await fetch(LOGIN, [username, password]);
  } catch (error) {
    console.error(error);
  }
};

const REGISTERMODEL = async ({
  fulname,
  username,
  password,
  phone,
  region,
}) => {
  try {
    return await fetch(REGISTER, [fulname, username, password, phone, region]);
  } catch (error) {
    console.error(error.message);
  }
};

export default {
  LOGINMODEL,
  REGISTERMODEL,
  GET,
};
