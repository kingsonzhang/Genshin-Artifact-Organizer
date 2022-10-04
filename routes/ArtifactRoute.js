const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const ARTIFACTCONTROLLER = require("../controllers/ArtifactController");
const { ensureAuth } = require('../middleware/auth')

ROUTER.get("/", ensureAuth, ARTIFACTCONTROLLER.getArtifacts);
ROUTER.post("/addArtifact", ARTIFACTCONTROLLER.addArtifact);
//ROUTER.put("/changeBookmarkName", BOOKMARKSCONTROLLER.changeBookmarkName);
ROUTER.delete("/deleteArtifact", ARTIFACTCONTROLLER.deleteArtifact);

module.exports = ROUTER;