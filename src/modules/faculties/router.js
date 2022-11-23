import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/faculties", controller.GET);
router.get("/faculties/:facultedId", controller.GET);

export default router;
