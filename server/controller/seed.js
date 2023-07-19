// require('dotenv').config({path:'../../.env'})
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // }
})


module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            
            DROP TABLE IF EXISTS all_users;
            DROP TABLE IF EXISTS calendar;
            DROP TABLE IF EXISTS todos;
            DROP TABLE IF EXISTS affirmations;
            DROP TABLE IF EXISTS goals;

            -- Create tables
            CREATE TABLE all_users (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(100),
                first_name VARCHAR(100),
                last_name VARCHAR(100),
                email VARCHAR(50),
                password VARCHAR(20)
            );

            CREATE TABLE todos (
                todo_id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES all_users(user_id),
                title VARCHAR(100),
                date_due DATE,
                date_start DATE,
                category VARCHAR(25),
                details TEXT,
                UNIQUE(todo_id)
            );

            CREATE TABLE calendar (
                calendar_input SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES all_users(user_id),
                todo_id INTEGER REFERENCES todos(todo_id),
                task_title VARCHAR(60),
                category VARCHAR(25)
            );


            CREATE TABLE affirmations (
                affirmation_id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES all_users(user_id),
                affirmation TEXT
            );

            CREATE TABLE goals (
                user_id INTEGER REFERENCES all_users(user_id),
                goal_id SERIAL PRIMARY KEY,
                goal TEXT
            );
            

            INSERT INTO all_users (username, first_name, last_name, email, password)
            VALUES
                ('user1', 'Hikmah', 'Abodunrin', 'hikmah@awesome.com', 'yass'),
                ('user2', 'Jane', 'Smith', 'jane@example.com', 'two');

            INSERT INTO todos (user_id, title, date_due, date_start, category, details)
            VALUES
                (1, 'Buy groceries', '2023-07-15', '2023-07-14', 'Personal', 'Remember to buy milk and eggs.'),
                (2, 'Finish project', '2023-07-20', '2023-07-15', 'Work', 'Complete the final report.');

            INSERT INTO calendar (user_id, todo_id, task_title, category)
            VALUES
                (1, 1, 'Meeting', 'Work'),
                (2, 2, 'Appointment', 'Personal');

            INSERT INTO affirmations (user_id, affirmation)
            VALUES
                (1, 'I am capable of achieving my goals.'),
                (2, 'I am grateful for the opportunities in my life.');

            INSERT INTO goals (user_id, goal)
            VALUES
                (1, 'Lose 10 pounds by the end of the month.'),
                (2, 'Learn a new language.');
    
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
        }
    }