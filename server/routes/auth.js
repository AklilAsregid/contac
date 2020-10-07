const router = require('express').Router()
const User = require('../../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


router.post('/register', async(req, res) => {
    const { name, email, password } = req.body;
    const errors = []
    if (name == '' || email == '' || password == '') {
        errors.push('please fillout the form');
        if (errors) return res.send({ error: errors })
    }
    //check if email is already exits
    const existEmail = await User.findOne({
        email: req.body.email
    });
    if (existEmail) return res.send({ error: 'The email enterd is already exist' })

    //hash passwords
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)


    const user = await new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const savedUser = await user.save()
        res.send({
            user: user.name
        })
    } catch (err) {
        res.status(400).send({ error: err })
    }
})

router.post('/login', async(req, res) => {
    //check email if exits
    const findEmail = await User.findOne({
        email: req.body.email
    });
    if (!findEmail) return res.send({ error: 'Email or password is wrong' });
    //check if password is correct
    const userfind = await bcrypt.compare(req.body.password, findEmail.password);
    if (!userfind) return res.send({ error: "password is invalid" })
    const user = {
        id: findEmail._id,
        name: findEmail.name
    }
    jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: 3 * 60 * 60 + 's' }, (err, token) => {
        res.json({ token: token })
    })
    req.session.user = findEmail._id


})

module.exports = router