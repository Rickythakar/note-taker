const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const dbJSON = require('../db/db.json');
// console.log(dbJSON);

//Require the path and router items needed
const path = require('path');

//Need to add the router.get functionality for each of the html pages
// All routes are prefixed with /api - ref ln18 sever.js file
router.get('/notes', (req,res) => {
    console.log('api/notes')
    res.json(dbJSON)
});

router.post('/notes', (req,res) => {
    console.log(req.body)

    const {title, text, id} = req.body;
    const newNote = {
        title,
        text,
        id: uuidv4()
    };
    if(req.body){
        readAndAppend(newNote,'./db/db.JSON');
        res.json('note created');
    }
    else {
        res.error('note create failed')
    }
});
//exports the routes
module.exports = router;