const express = require("express");
const router = express.Router();
const resourcesController = require("../controllers/resources");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, resourcesController.getResource);

router.post("/createResource", resourcesController.createResource);

router.put("/likeResource/:id", resourcesController.likeResource);

router.delete("/deleteResource/:id", resourcesController.deleteResource);

module.exports = router;
