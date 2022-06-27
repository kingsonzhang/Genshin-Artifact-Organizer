const EXPRESS = require("express");
const BODYPARSER = require("body-parser");

const APP = EXPRESS();
APP.set("view engine", "ejs");
APP.use(BODYPARSER.urlencoded({entended: true}));
APP.use(EXPRESS.static("public"));
APP.use(BODYPARSER.json());

/*
Any files in the "public" folder in the current directory
Will be served to the client
MEANING SCRIPTS AND CSS HREFS DO NOT NEED A GET/READ REQUEST
*/
//APP.use(EXPRESS.static("public"));
const PORT = 8000;

APP.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is now running on Port ${PORT}. Better go catch it!`)
})

APP.get("/", (req, res) =>{
    res.render("GenshinArtifactSorter.ejs", {});
});

APP.get("/:ArtifactSet", (req, res) =>{
    let artifactSet = req.params.ArtifactSet;
});