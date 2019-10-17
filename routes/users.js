//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================

router.get("/", async (req, res) => {
    const user = await User.find({}).exec()
    res.json(user)
})

// 2. add a new user
// POST /
// ========================================
router.post('/add', (req, res) => {
    let body = req.body
    User.create(body)
        .then(dbUser => res.status(200).json(dbUser))
        .catch(err => console.log(err))
})

module.exports = router;