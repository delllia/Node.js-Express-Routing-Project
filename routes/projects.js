const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    var projectId = req.params.id;
    const projects = [{id: 1, name: 'First Project', description: "description", imageURL: "www.linkedin.com"},
                      {id: 2, name: 'Second Project', description: "description", imageURL: "www.linkedin.com"}
                     ]
    console.log(projects);
    res.json(projects.filter(project => project.id == projectId));
});
 
module.exports = router;