// database
const UserProfileDB = require('../models/Users')

module.exports = async (req, res) => {
    const user = await UserProfileDB.findById(req.params.id)
    res.render("profile", {
        title: "Blog post data for more details about the blog.",
        user
    })
}