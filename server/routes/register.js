const express = require('express');
const { pool } = require('../configuration/dbConfig');
const bcrypt = require('bcrypt');
const router = express.Router();


//Register user
router
.route('/')
.post(async (req, res) => {
    let {first_name, last_name, email, password, confirm_password } = req.body;

    //Ref
    console.log({
        first_name,
        last_name,
        email,
        password,
        confirm_password
    });

    //Validation
    //Any errors pushed here 
    let errors = [];

    //Check all forms entered
    if (!first_name || !last_name || !email || !password || !confirm_password ) {
        errors.push({ message: 'All fields must be complete'})
    };

    //Check password length
    if (password.length < 6) {
        errors.push({ message: 'Password not long enough'})
    };

    //Passwords match
    if (password !== confirm_password) {
        errors.push({ message: 'Passwords dont match'})
    };

    if (errors.length > 0 ) {
        res.send(errors);
        res.redirect(`http://localhost:3000/register`)
    } else {
        //Form validation passed

        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)

        pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email],
            (err, results) => {
                if (err) {
                    throw err
                }
                //Log results
                console.log(results);

                //If user already exists 
                if (results.rows.length > 0) {
                    errors.push({ message: 'Email already exists' });
                    res.redirect(`http://localhost:3000/login`)
                    res.json({ errors });
                } else {
                    //No user in database
                    pool.query(
                        `INSERT INTO users (first_name, last_name, email, password) 
                        VALUES ($1, $2, $3, $4) RETURNING id, password`,
                        [first_name, last_name, email, hashedPassword],
                        (err, results) => {
                            if (err) {
                                throw err;
                            }
                            console.log(results.rows);
                            res.redirect(`http://localhost:3000/login`)
                        }
                    )
                }
            }
        )
    }
});

module.exports = router;