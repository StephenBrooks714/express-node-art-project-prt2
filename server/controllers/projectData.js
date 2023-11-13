// database
const ProjectDetails = require('../models/Projects')

module.exports = async (req, res) => {
    const project = await ProjectDetails.findById(req.params.id).populate('userid')
    res.render("project", {
        title: "Project data for more details about the project.",
        project
    })
}