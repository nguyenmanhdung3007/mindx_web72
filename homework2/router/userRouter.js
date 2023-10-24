const logApi = require("../middlewares/logApi");
const {checkApiKey, statistics} = require("../middlewares/checkApiKey");
const router = require('express').Router();
const {getAllUser, createNewUser} = require('../controllers/userController')
const { studentController, teacherController, subjectController, statisticController } = require('../controllers/counter');


router.get('/student',checkApiKey, logApi("GET", "getallStudent"),studentController);
router.get('/teacher',checkApiKey, logApi("GET", "getallTeacher"),teacherController);
router.get('/subject',checkApiKey, logApi("GET", "getallSubject"),statisticController)
router.get('/system/statistic', statisticController);
router.get('/', getAllUser);
router.post('/', createNewUser);


module.exports = router;