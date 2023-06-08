const express= require ('express'); 
const cors=require("cors");
const apiRouter=require('./server');

const { handlerError, errorLogs } = require('./middleware/error.handler');
const app =express();
app.use(cors());
const port=3000;
app.use(express.json());
apiRouter(app); 

app.use(handlerError);
app.use(errorLogs);



app.get('/', function (req, res){
    res.send('Hola mundo mi primer endpoint');
});


app.listen (port, function(req,res){
    console.log ('Aplicación escuchando en el puerto 3000');
})