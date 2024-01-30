const mongoose = require("mongoose");
require("dotenv").config({path: '.env'});

const dbconnexion = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, () => 
            { console.log('Successfully connected to mongodb'); }
        ); 
    } 
    catch (error) {
        console.log(error);
    }
  
};

module.exports = {
    dbconnexion
}



