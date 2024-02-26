import { Router } from "express";

export const router = Router()

router.get('/', async (req, res)=> {
  return res.json({
    hello: "Play a so music, this is reggea music! "
  })
})