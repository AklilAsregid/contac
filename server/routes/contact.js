var express = require('express');
var router = express.Router();
const auth = require('./verifyToken');
const Contact = require('../../models/Contact')
const multer = require('multer')
    /* GET users listing. */
    //GET /contact
    //list constact that a user saved
router.get('/', auth, async(req, res) => {
    const contact = await Contact.find({ user: req.session.user })
    res.json(contact);
});
//GET /contact/:id
//list of a particular 
router.get('/:id', auth, async(req, res) => {
        const contact = await Contact.find({ _id: req.params.id })
        res.send(contact)
    })
    //setting up multer for uploading files 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toDateString() + file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 9,
    },
    fileFilter: fileFilter,
});

router.post('/add', auth, async(req, res) => {
        req.body.user = req.session.user;
        const contact = await Contact(req.body).save();
        res.send(contact)
    })
    //edit contact profile 
router.put('/:id', auth, async(req, res) => {
        const id = req.params.id
        const contact = await Contact.findOneAndUpdate({ _id: id }, req.body)
        res.send(contact)
    })
    //edit contact profile pricture
router.put('/avatar/:id', auth, upload.single('avatar'), async(req, res) => {
    const id = req.params.id
    req.body.avatar = req.file.filename
    const contact = await Contact.findOneAndUpdate({ _id: id }, req.body)
    res.send(contact)
})

router.delete('/:id', auth, async(req, res) => {
    const resp = await Contact.findByIdAndDelete(req.params.id)
    res.send(resp)
})


module.exports = router;