require('dotenv').config();

const express = require('express')
const cors = require('cors')

const {PORT} = process.env

//Seed Database with some dummy info
const {seed} = require('./controller/seed.js')
const {Affirmations} = require('./tableModels/affirmations.js')
const {Calendar} = require('./tableModels/calendar.js')
const {Goals} = require('./tableModels/goals.js')
const {ToDo} = require('./tableModels/toDo.js')
const {User} = require('./tableModels/users.js')

const{addUser, getUsers} = require('./controller/users.js')
const{login} = require('./controller/users.js')
const {makeToDo, getAllToDo, deleteToDo, makeEvent, getAllEvents, deleteEvent, makeAffirmation, getAllAffirmations, deleteAffirmation, makeGoal, getAllGoals, deleteGoal} = require('./controller/forms.js');
const calendar = require('./tableModels/calendar.js');
const affirmations = require('./tableModels/affirmations.js');
const goals = require('./tableModels/goals.js');

// User.hasMany(Goals);
// User.hasMany(ToDo);
// User.hasMany(Affirmations);

const app = express()



console.log(PORT)
app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)


//login
app.post('/login', login)

//signup
app.post('/users', addUser)
app.get('/users', getUsers)

// todo
app.post('/todo', makeToDo)
app.get('/todo/:userid', getAllToDo)
app.delete('/todo/:id', deleteToDo)

// calendar
app.post('/calendar', makeEvent)
app.get('/calendar/:userid', getAllEvents)
app.delete('/calendar/:id', deleteEvent)

// affirmations
app.post('/affirmation', makeAffirmation)
app.get('/affirmation/:userid', getAllAffirmations)
app.delete('/affirmation/:id', deleteAffirmation)

// goals
app.post('/goal', makeGoal)
app.get('/goal/:userid', getAllGoals)
app.delete('/goal/:id', deleteGoal)


app.listen(PORT, () => console.log(`up on ${PORT}`))