const { User } = require('../tableModels/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET} = process.env



const createToken = (username, user_id) => {
  return jwt.sign(
      {
          username,
          user_id
      },
      SECRET,
      { 
          expiresIn: '1 day' 
      }
  )
}

module.exports ={
    addUser: async (req, res) => {
        try {
            const { username, first_name, last_name, email, password } = req.body;
            let foundUser = await User.findOne({where: {username}})
            if (foundUser) {
                res.status(400).send('cannot create user')
            } else {
              const salt = bcrypt.genSaltSync(10)
              const hash = bcrypt.hashSync(password, salt)
              const newUser =  await User.create({
                username,
                first_name,
                last_name,
                email,
                password:hash})
              const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
              console.log('TOKEN des', token)
              const exp = Date.now() + 1000 * 60 * 60 * 48
           ;
            res.sendStatus(200);
               }
              } catch (error) {
            console.error(error);
            res.sendStatus(400)
          }
        },
    
      login: async (req, res) => {
        try {
          const {username, password} = req.body
          let foundUser = await User.findOne({where: {username}})
          if (foundUser) {
            console.log('User found:', foundUser.dataValues);
            const isAuthenticated = bcrypt.compareSync(password, foundUser.password)
            console.log(isAuthenticated)
            
            if (isAuthenticated || password === foundUser.password) {
                console.log('yes')
                const token = createToken(foundUser.dataValues.username, foundUser.dataValues.user_id)
                console.log(token)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: foundUser.dataValues.username, 
                    user_id: foundUser.dataValues.user_id,
                    token, 
                    exp
                })
              } else {
                  res.status(400).send('cannot log in')
              }
            } else {
                res.status(400).send(username, ' not found')
            }
        } catch (error) {
            console.log('ERROR IN login')
            console.log(error)
            res.sendStatus(400)
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: ['id', 'username', 'firstName', 'lastName', 'email']
            })
            res.sendStatus(200).send(users)
    } catch(err) {
        console.error(err);
        res.sendStatus(400)

    }
}
};