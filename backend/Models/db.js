const mongoose = require("mongoose");

const mongo_uri = process.env.MONGO_CONN;

mongoose.connect( mongo_uri )

.then(() => {
    console.log( "MONGODB Connected Successfully" )
}).catch(( err ) => {
    console.log( "MONGODB Connection Error", err )
});
