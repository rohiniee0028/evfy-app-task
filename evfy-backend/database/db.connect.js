const mongoose = require('mongoose');

const Mongoconnect = async () => {   
     await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser : true,  
     })
     .then((res)=>console.log(" Database Connected"))
     .catch((err)=>console.log(err))
}

module.exports = Mongoconnect;