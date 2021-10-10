const express = require('express'),
router = express.Router(),
controller = require('../controllers');

router.get('/course-detail/:id', function(req, res, next) {

    req.body = {
        id:"61627a69e6925836102f052f"
    }
   
    return controller.courseController.courseDetail(req.body)
    .then(response => {
        
        res.json(response)
    })
    .catch(error => {
        next(error)
      });

})




module.exports = router