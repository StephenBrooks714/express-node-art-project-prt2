// database
const deleteProject = require('../models/Projects')

module.exports = async (req, res) => {
    await deleteProject.findByIdAndDelete(req.params.id)
    res.redirect('/newProject')
}