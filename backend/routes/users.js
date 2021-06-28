const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const { check, validationResult } = require('express-validator/check');
const { body, validationResult } = require('express-validator');
const User = require('../models/User')

//@route POST api/users
//@desc register a user
// @access Public
router.post(
    '/',
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        User.create({
            username: req.body.username,
            password: req.body.password,
        }).then(user => res.json(user));
    },
);






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