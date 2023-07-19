const {ToDo} = require('../tableModels/toDo')
const {User} = require('../tableModels/users')
const {Goals} = require('../tableModels/goals')

module.exports = {
    makeToDo: async (req, res) => {
        try{
            const {title, category, date_start, date_due, details, user_id} = req.body
            await ToDo.create({ title, category, date_start, date_due, details, user_id})
            res.sendStatus(200)
        }catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    getAllToDo: async (req, res) => {
        try {
            const {user_id} = +req.params
            // console.log(user_id)
            const todos = await ToDo.findAll({
                // where: {user_id: user_id},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`],
                }]
            })
            res.status(200).send(todos)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    }, 

    deleteToDo: async (req, res) => {}, 
    makeEvent: async (req, res) => {}, 
    getAllEvents: async (req, res) => {}, 
    deleteEvent: async (req, res) => {}, 
    makeAffirmation: async (req, res) => {}, 
    getAllAffirmations: async (req, res) => {}, 
    deleteAffirmation: async (req, res) => {}, 
    makeGoal: async (req, res) => {
         
    }, 
    getAllGoals: async (req, res) => {
        try {
            const {user_id, goal} = req.body
            const goals = await Goals.findAll({
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`],
                    association: Goals.belongsTo(User)
                }]
            })
            res.status(200).send(goals)
        } catch (error) {
            console.log('ERROR IN getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    deleteGoal: async (req, res) => {}
}