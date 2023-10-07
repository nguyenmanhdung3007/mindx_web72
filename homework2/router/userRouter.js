const logApi = require("../middlewares/logApi");
const checkApiKey = require("../middlewares/checkApiKey");
const router = require('express').Router();


router.get('/student',checkApiKey, logApi("GET", "getallStudent"))
router.get('/teacher',checkApiKey, logApi("GET", "getallTeacher"))
router.get('/subject',checkApiKey, logApi("GET", "getallSubject"))
router.get('/system/statistic');


module.exports = router;