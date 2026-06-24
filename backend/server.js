const express = require ('express')
const cors = require ('cors')
const tasksRouter = require('./routes/tasks.router')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/tasks', tasksRouter)
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(4000, ()=>{
    console.log('listening on port 4000')
})

