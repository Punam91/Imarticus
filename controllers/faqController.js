const models = require('../models'),
config = require('../config'),
db = require("../db").queries

require('dotenv').config();


   

    const getFaqList =async(payload)=>{
        
        try {
   
            let faqList = await db.getData(models.faq.faqs,{});
          
       
        return faqList;
        }
        catch(err){
            throw err
        }
    }

 


module.exports = {

    getFaqList

}