const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const about = {firstName: 'Delia', lastName: 'Tirla', gender: 'F', bornDate: "1981", link: 'www.delia-tirla.com'};
    res.send(about);
});
 
module.exports = router;