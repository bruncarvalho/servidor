import express, {request, Router} from "express"

const app = express()
const router = Router()

app.use(express.json())

app.use(router)

router.get('/api', (request, response)=> {
  response.json({
    messege: 'Hello World'
  })
})

// router.post('/api', ()=> {
//   request 
// })

app.listen('3333', ()=> console.log('servidor funcionando: porta:3333'))