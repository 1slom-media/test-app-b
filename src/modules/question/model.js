import { fetchAll,} from "../../lib/postgres.js";
import {
  GETQUESTION
} from "./query.js";

const GET =  async ({questionId=0},{fan}) => {
  try {
    const questions = await fetchAll(GETQUESTION, [questionId,fan])

    return questions?.map(question => {
      question.sciences = question.sciences[0] == null ? [] : question.sciences
      return question
    })


  } catch (error) {
    console.log(error);
  }
};


export default {
  GET,
};