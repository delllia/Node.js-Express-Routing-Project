const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    const studies = [{name: 'Scoala Informala', date: "2019-2020", type: "professional degree"},
                     {name: 'UPT', date: "1999-2005", type: "university degree"}
                    ]
    res.json(studies);
});
 
module.exports = router;