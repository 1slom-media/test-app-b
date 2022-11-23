import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/question", controller.GET);
router.get("/question/questionId", controller.GET);

export default router;
