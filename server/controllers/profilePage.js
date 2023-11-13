// database
const UserProfileDB = require('../models/Users')

module.exports = async (req, res) => {
    const user = await UserProfileDB.find({}).sort({_id: -1})
    res.render("about", {
        title: "About post data for more details about the artist.",
        user
    })
}