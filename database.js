const mongoose  = require("mongoose")

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(db => console.log('Database is conected'))
    .catch(err => console.error(err))