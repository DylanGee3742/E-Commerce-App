//Stores logged in users session details in cookie, so can use app authenticated user
const localStrategy = require('passport-local').Strategy
const { pool } = require('./dbConfig');
const bcrypt = require('bcrypt');
const { authenticate } = require('passport');

function initialize(passport) {
    //Authenticate user logging in 
    const authenticateUser = (email, password, done) => {
        //If user exists in database
        pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email],
            (err, results) => {
                if (err) {
                    throw (err)
                }

                //Found user in database
                if (results.rows.length > 0) {
                    //Pass in user object
                    const user = results.rows[0];

                    //Compare the password entered to password stored in database
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            throw err;
                        }
                        if (isMatch) {
                            //Return user and store in session cookie
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password is incorrect' });
                        }
                    })
                } else {
                    //User doesnt exist
                    return done(null, false, { message: 'Email does not exists. Please register'});
                }
            })
    }

    passport.use(
        new localStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        authenticateUser
        )
    );

    //Store user id in session
    passport.serializeUser((user, done) => done(null, user.id));

    //Searches user details based on id
    passport.deserializeUser((id, done) => {
        pool.query(     
            'SELECT * FROM users WHERE id = $1', [id], (err, results) => {
                if (err) {
                    throw (err);
                }

                //Store user object in session
                done(null, results.rows[0])
            }
        )
    })
};

module.exports = initialize;