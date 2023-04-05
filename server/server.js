const express = require('express')
const helmet = require('helmet')
const dotenv = require('dotenv')
const connectDB = require("./utils/DB_connection");
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
dotenv.config()

const PORT = process.env.PORT | 5000


connectDB();

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(cookieParser());

const authRoute = require('./routes/authRoute')
app.use('/api/auth', authRoute)

const userRoute = require('./routes/userRoute')
app.use('/api/user', userRoute)




app.use(helmet())
app.listen(PORT, () => {
   console.log(`Server Started on Port ${PORT}`)
})