import { Router } from "express";
import { UserController } from "./controller/userController";

const userControll = new UserController()

export const router = Router()

router.post('/', userControll.store)