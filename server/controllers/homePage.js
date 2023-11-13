const BlogsDb = require('../models/ArticlePost');
const ProjectsDb = require("../models/Projects");

module.exports = async (req, res) => {
    const blogs = await BlogsDb.find({}).limit(3).sort({_id: -1}).populate('userid')
    const projects = await ProjectsDb.find({}).limit(4).sort({_id: -1}).populate('userid')
    res.render("index", {
        title: "Express & Node Webapp for Art Studio",
        blogs, projects
    })
}