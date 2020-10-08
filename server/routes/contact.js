var express = require('express');
var router = express.Router();
const auth = require('./verifyToken');
const Contact = require('../../models/Contact')
router.get('/:id', auth, async(req, res) => {
    const contact = await Contact.find({ user: req.params.id })
    res.send(contact)
})

router.post('/add/:id', auth, async(req, res) => {
        req.body.user = req.params.id;
        const contact = await Contact(req.body).save();
        res.send(contact)
    })
    //edit contact profile 
router.put('/:uid/:cid', auth, async(req, res) => {
    const cid = req.params.cid
    const contact = await Contact.findOneAndUpdate({ _id: cid }, req.body)
    res.send(contact)
})

router.get('/:uid/:cid', auth, async(req, res) => {
    const user = req.params.uid;
    const cid = req.params.cid;
    const contact = await Contact.find({ _id: cid })
    res.send(contact);
})

router.delete('/:id', auth, async(req, res) => {
    const resp = await Contact.findByIdAndDelete(req.params.id)
    res.send(resp)
})


module.exports = router;