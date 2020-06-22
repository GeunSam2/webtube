import './db.js'
import app from './app'
import dotenv from 'dotenv'
dotenv.config()
// import './models/Videos'
// import './models/Comment'

const port = process.env.PORT

const handleListening = () => console.log(`Linstening on : http://localhost:${port}`)

app.listen(port, handleListening)
