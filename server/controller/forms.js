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

    makeGoal: async (req, res) => {
        try{
            const {goal, user_id} = req.body
            console.log(goal, user_id)
            // await Goals.create({ user_id, goal})

            await Goals.create({user_id: user_id, goal: goal},
                {timestamps:false,
                    createdAt: false,
                    updatedAt: false,})
            res.sendStatus(200)
        }catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }, 
    getAllGoals: async (req, res) => {
        try {
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
            console.log('ERROR')
            console.log(error)
            res.sendStatus(400)
        }
    }, 
    deleteGoal: async (req, res) => {
        try{
            const goal_id = req.params.goalId
            const deletedGoal = await Goals.destroy({ where: { goal_id } });
            if (deletedGoal === 0) {
            return res.status(404).send('Goal not found.');
            }
            res.send('deleted');
        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    }
}