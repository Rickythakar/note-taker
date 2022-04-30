const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const dbJSON = require('../db/db.json');
// console.log(dbJSON);

//Require the path and router items needed
const path = require('path');
const { json } = require('express/lib/response');

// All routes are prefixed with /api - ref ln18 sever.js file
router.get('/notes', (req,res) => {
    readFromFile('./db/db.json').then((data)=> res.json(json.parse(data)));
    console.log('api/notes')
    res.json(dbJSON)
});
router.get('/notes:id', (req,res) => {
    readFromFile('/db/db.json')
    .then((data)=> json.parse(data))
    .then((json)=> {
        const result = json.filter((note) => note.id === req.params.id);
        return result.lenght > 0
            ? res.json(result)
            : res.json ('note not found')
    });
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