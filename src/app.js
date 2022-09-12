import express, {request, Router} from "express"

const app = express()
const router = Router()

app.use(express.json())

app.use(router)

router.get('/api', (request, response)=> {
  response.json({
    messege: 'Gatos'
  })
})

router.post('/api', (request, response)=>{
  const { nameCat, ageCat } = request.body
  const animal = {
    name: nameCat,
    age: ageCat
  } 
  return response.json(animal)
})
app.listen('3333', ()=> console.log('servidor funcionando: porta:3333'))