import express, { response } from 'express'
import path from 'path'
import routes from './routes'
import cors from 'cors'
import { errors } from 'celebrate'

const app = express()

app.use(cors()) // {origin: domínio de producao }
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)





//uso de rotas, recursos, paramters, query

//const users = ["adller", "adriana", "andrey"]

// app.get('/users', (req, res) => {
    
//     //definida por querys no insomnia
    
//     const search = String(req.query.search)
//     console.log("lista query params com letra: "+ search)
    
//     const filteredUsers = search ? users.filter(user => user.includes(search)): users
    
//     res.json(filteredUsers)
// })


// app.get('/users/:id', (req, res) => {
//     console.log('Lista um usuário por req params')
    
//     const id = Number(req.params.id)

//     const user = users[id]
    
//     return res.json(user)
// })

// app.post('/users', (request, response) => {
    
//     const data = request.body

//     const user = {
//         name: data.name,
//         email: data.email
//     }

//     return response.json(user)
// })

// 




