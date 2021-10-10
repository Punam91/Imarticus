const models = require('../models'),
controllers = require('../controllers'),
mongoose = require('mongoose');
db = require("../db").queries;



    const courseDetail = async (payloadData) => {

        try{
          let match = {};
          let lookUp = {};
          let unwindDescription = {};

          let lookup2 = {};
          let unwind2 = {};


          let lookup3 = {};
          let unwind3 = {};


          let lookup4 = {};
          let unwind4 = {};


  console.log(payloadData)

      
      match = {
          $match: {
            _id: mongoose.Types.ObjectId(payloadData.id)
          
           
          }
        };
      
      
      lookUp = {
        $lookup: {
          from: "descriptions",
          localField: "_id",
          foreignField: "courseId",
          as: "descriptionData"
        }
      };
      
      unwindDescription= {
        $unwind: {
          path: "$descriptionData",
          preserveNullAndEmptyArrays: true
        }
      };
      
      lookup2 = {
        $lookup: {
          from: "curriculums",
          localField: "_id",
          foreignField: "courseId",
          as: "curriculumData"
        }
      };
      
       unwind2 = {
        $unwind: {
          path: "$curriculumData",
          preserveNullAndEmptyArrays: true
        }
      };


      lookup3 = {
        $lookup: {
          from: "instructors",
          localField: "insructorId",
          foreignField: "_id",
          as: "instructorData"
        }
      };
      
       unwind3 = {
        $unwind: {
          path: "$instructorData",
          preserveNullAndEmptyArrays: true
        }
      };




      let project = {
        "$project": {
           "_id":1,
          "title":1,
          "createdBy":1,
          "tagline":1,
          "includes":1,
          "learning":1,
          "duration":1,
          "cost":1,
          "description.description": 1,
          "description.elements": 1,
          "description.topics": 1,
          "description.descriptionMetaDetail": 1,
          "curriculum.videos": 1,
          "instructor.name": 1,
          "instructor.image": 1,
          "instructor.about": 1,
                 
        }
      }
      
      let group = {
        $group: {
          _id: "$_id",
          title: { $first: "$title"},
          createdBy: { $first: "$createdBy"},
          tagline: { $first: "$tagline"},
          includes: { $first: "$includes"},
          learning: { $first: "$learning"},
          duration: { $first: "$duration"},
          cost: { $first: "$cost"},
          description: {$first: "$descriptionData"},
          curriculum: {$first: "$curriculumData"},
          instructor:{$first: "$instructorData"},
         
         
        }
      };
      
      let query = [
        match,
        lookUp,
        unwindDescription,
        lookup2,
        unwind2,
        lookup3,
        unwind3,
      
        group,
        project
      ];
     
      
      let getCourseDetail = await db.aggregateData(models.courses.courses, query);
     
      
      return getCourseDetail;
        }
        catch(error){
      console.log(error)
        }
      
      }

  


      


module.exports = {
    
  courseDetail
    
    

}