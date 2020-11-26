const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const experience = [{name: 'Archi-Max SRL', date: "2007-present"},
                     {name: 'Santecon SRL', date: "2005-2007"}
                    ]
res.json(experience);
});

module.exports = router;