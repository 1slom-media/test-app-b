import { Router } from 'express'
import controller from './controller.js'

const router = Router()
router.get("/sciences", controller.GET);
router.get("/sciences/:scienceId", controller.GET);

export default router;