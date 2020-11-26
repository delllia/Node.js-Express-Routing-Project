const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    const skills = [{name: 'JavaScript', value: 4}, 
                    {name: 'HTML', value: 5},
                    {name: 'CSS', value: 5},
                    {name: 'Angular', value: 2},
                    {name: 'Node', value: 2}
                ]
    res.json(skills);
});
 
module.exports = router;