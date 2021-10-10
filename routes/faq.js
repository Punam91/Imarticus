const express = require('express'),
router = express.Router(),
controller = require('../controllers');

router.get('/faq/list', function(req, res, next) {

  
    return controller.faqController.getFaqList()
    .then(response => {
        
        res.json(response)
    })
    .catch(error => {
        next(error)
      });

})



module.exports = router;
