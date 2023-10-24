const { statistics } = require('../middlewares/checkApiKey');
const users = require('../data/index');

const studentController = (req, res) => {
  const apiKey = req.query.apiKey;
  const user = users.find(user => user.apiKey === apiKey);
  
  statistics[user.username].student++;
  
  res.send('Student resource');
};

const teacherController = (req, res) => {
  const apiKey = req.query.apiKey;
  const user = users.find(user => user.apiKey === apiKey);
  
  statistics[user.username].teacher++;
  
  res.send('Teacher resource');
};

const subjectController = (req, res) => {
  const apiKey = req.query.apiKey;
  const user = users.find(user => user.apiKey === apiKey);
  
  statistics[user.username].subject++;
  
  res.send('Subject resource');
};

const statisticController = (req, res) => {
  const statsArray = Object.keys(statistics).map(username => ({
    user: username,
    ...statistics[username]
  }));
  
  res.json(statsArray);
};

module.exports = { studentController, teacherController, subjectController, statisticController };