import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.use(cors())

let TodoData = []

app.get('/', (req, res) => {
  const name = "Akanksha"
  res.send(`Hello from home, ${name}`)
})

app.get('/services', (req, res) => {
  res.send("Hello from services page")
})

app.get('/courses', (req, res) => {

  const data = [
    { id: 1, course: "MEAN" },
    { id: 2, course: "MERN" },
    { id: 3, course: "MERP" },
    { id: 4, course: "DSA" },
    { id: 5, course: "UI/UX" },
  ]
  res.send(data)

})

app.get('/todos', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      TodoData = data;
      res.send(data)
      // console.log("Tododata", Tododata)
    }
    )
})

app.listen(port, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
})