import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/result", controller.GET);
router.get("/result/:resultId", controller.GET);
router.post("/result", controller.POST);

export default router;
