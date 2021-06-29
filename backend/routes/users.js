const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const { response } = require('express');
const jwt = require('jsonwebtoken')
const config = require('config')
    //@route POST api/users
    //@desc register a user
    // @access Public
router.post('/',

    async(req, res) => {
        console.log(req.body);
        const { name, email, password } = req.body
            // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).send({ message: "invalid input" });
        }
        let createdUser;
        try {

            createdUser = new User({
                name,
                email,
                password
            })


        } catch (err) {
            console.log(err);
        }
        try {
            await createdUser.save()
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 3600000 //3600
            }, (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
        } catch (err) {
            console.log(err);
        }
        res.json({ user: createdUser })

    },

);

module.exports = router;





// router.post(
//     '/', [
//         check('name', 'Please add name').not().isEmpty,
//         check('email', 'Please include a valid email').isEmail,
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
//     ],
//     async(req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         const { name, email, password } = req.body

//         try {
//             let user = await User.findOne({ email });
//             if (user) {
//                 return res.status(400).json({ meg: ' Email already exists' });
//             }

//             user = new User({
//                 name,
//                 email,
//                 password
//             });

//             const salt = await bcrypt.genSalt(10);

//             user.password = await bcrypt.hash(password, salt);

//             await user.save();

//             res.send('User saved')

//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//             process.exit(1);
//         }
//     });

module.exports = router;