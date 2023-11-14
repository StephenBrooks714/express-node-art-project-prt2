const express = require("express");
const router = express.Router();
const cache = require("../cache/mcache");

const homeController = require("../controllers/homePage");
const contactController = require("../controllers/contactPage");
const sendFormController = require("../controllers/sendForm");
const sendBannerController = require("../controllers/snedBannerForm");
const registerController = require("../controllers/registerPage");
const storeUserController = require("../controllers/storeUser");
const loginController = require("../controllers/loginPage");
const loginUserController = require("../controllers/loginUser");
const logoutUserController = require("../controllers/logoutUser");
const profileController = require("../controllers/profilePage");
// blogs
const NewPostController = require("../controllers/newPostPage");
const storePostController = require("../controllers/storePost");
const blogsController =require("../controllers/blogsPage");
const postController = require("../controllers/postData");
const deletePostController = require("../controllers/deletePost");
// projects
const newProjectController = require("../controllers/newProjectPage");
const storeProjectController = require("../controllers/storeProject");
const projectsController = require("../controllers/projectsPage");
const projectController = require("../controllers/projectData");
const deleteProjectController = require("../controllers/deleteProject");

const auth = require("../middleware/ifAuthorized");
const blog = require("../middleware/validateBlogForm");
const projectVal = require("../middleware/validateProjectForm");

router.get("/", cache(2), homeController);
router.get("/contact", contactController);
router.post("/send/form", sendFormController);
router.post("/send/banner", sendBannerController);
// users
router.get("/register", cache(2), registerController);
router.post("/store/user", storeUserController);
router.get("/login", cache(2), loginController);
router.post("/login/user", loginUserController);
router.get("/logout", logoutUserController);
router.get("/about", profileController);
// projects
router.get("/newProject", auth, cache(2), newProjectController);
router.post("/store/project", projectVal, storeProjectController);
router.get("/projects", cache(2), projectsController);
router.get("/project/:id", cache(2), projectController);
router.get("/delete/project/:id", auth, deleteProjectController);
// articles
router.get("/newPost", auth, NewPostController);
router.post("/store/post", blog, storePostController);
router.get("/blogs", cache(2), blogsController);
router.get("/post/:id", cache(2), postController);
router.get("/delete/post/:id", auth, deletePostController);

module.exports = router;