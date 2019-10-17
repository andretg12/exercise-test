/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all exercise logs on record
// GET: /
// ========================================
router.get('/', (req, res) => {
    Exercise.find({}).then((data) => res.status(200).json(data)).catch(err => res.status(400).send(err))
})

// 2. add a new exercise log
// POST: /add
// ========================================
router.post("/add", (req, res) => {
    Exercise.create(req.body).then(u => res.json(u)).catch(err => res.json(err))
})

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get("/:id", async (req, res) => {
    try {
        const exercise = await Exercise.findById({
            _id: req.params.id
        });
        res.send(exercise)
    } catch (err) {
        console.log(err)
    }
})

// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id", async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete({
            _id: req.params.id
        });
        res.json(exercise)
    } catch (err) {
        console.log(err)
    }
})

// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.post("/update/:id", (req, res) => {
    router.post('/update/:id', async (req, res) => {
        const update = await Exercise.updateOne({
            _id: req.params.id
        }, {
            $set: {
                username: req.body.username,
                description: req.body.description,
                duration: req.body.duration,
                date: Date.now()
            }
        }, {
            new: true
        })
        res.send(update)
    })
})

module.exports = router;