const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const AuthRouter = require('./routes/AuthRouter')
// const PostRouter = require('./routes/PostRouter')
const UserRouter = require('./routes/UserRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
// app.use('/posts', PostRouter)
app.use('/users', UserRouter)
app.listen(PORT, () => console.log(`Boom! Server running on port: ${PORT}`))