const express = require( "express" );
const app = express();
const bodyParser = require( "body-parser" );
const cors = require( "cors" );
const AuthRouter = require( "./Routes/AuthRouter.js" );
const ProducterRouter = require( "./Routes/ProductRouter.js" );

// dotenv is used to create environmental variable
require( "dotenv" ).config();
require( "./Models/db" );

// PORT is created as environmental variable
const PORT = process.env.PORT || 8080;

app.get( "/ping", ( req, res ) => {
    res.send("Pong");
});
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProducterRouter);

app.listen( PORT, () => {
    console.log( `Server is running successfully on " ${ PORT }` )
});
