const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const appRouter = require('./router')
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/porto" ,
    {
        useNewUrlParser:true ,
     useUnifiedTopology:true}
)
.then(() => {
    console.log('Bazaga ulandi')
})
.catch((err)=> {
    console.log('Bazaga ulanishda hato')
})

app.use(bodyParser.json());


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Catchphrases REST API',
            description: "A REST API built with Express and MongoDB. This API provides movie catchphrases and the context of the catchphrase in the movie."
        },
    },
    apis: ["./swagger.js"]
}


app.use('/api' , appRouter)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const port = process.env.PORT || 5000

app.listen(port , () => {
    console.log(`${port}chi port ishga tushdi`)
})



