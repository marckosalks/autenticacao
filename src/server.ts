import express from 'express'
import { router } from './routes'


const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, () =>
  console.log("Dont worry, about the thing, becase every little thing just gonna be a right! http://localhost:3000")
)