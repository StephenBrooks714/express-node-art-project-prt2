const BlogsDb = require('../models/ArticlePost');
const ProjectsDb = require("../models/Projects");

module.exports = async (req, res) => {
    const blogs = await BlogsDb.find({}).sort({_id: -1}).populate('userid')
    const projects = await ProjectsDb.find({}).sort({_id: -1}).populate('userid')
    res.render("index", {
        title: "Express & Node Webapp for Art Studio",
        blogs, projects
    })
}