const EXPRESS = require("express");
const APP = EXPRESS();

const PORT = 8000;

const ARTIFACTSETS = {
    "BlizzardStrayer":{
        "Flower" : "Snowswept Memory",
        "Feather" : "Icebreaker's Resolve",
        "Timepiece" : "Frozen Homeland's Demise",
        "Goblet" : "Frost-Weaved Dignity",
        "Circlet" : "Broken Rime's Echo"
    },
    "PaleFlame":{
        "Flower" : "Stainless Bloom",
        "Feather" : "Wise Doctor's Pinion",
        "Timepiece" : "Moment of Cessation",
        "Goblet" : "Surpassing Cup",
        "Circlet" : "Mocking Mask"
    },
    "Unknown":{
        "Flower" : "unknown",
        "Feather" : "unknown",
        "Timepiece" : "unknown",
        "Goblet" : "unknown",
        "Circlet" : "unknown"
    }
}

APP.listen(PORT, () =>{
    console.log(`Server is now running on Port ${PORT}. Better go catch it!`)
})

APP.get("/", (request, response) =>{
    response.sendFile(__dirname + "/index.html");
});

APP.get("/api", (request, response) =>{
    response.json(ARTIFACTSETS);
})

APP.get("/:ArtifactSet", (request, response) =>{
    let setName = request.params.ArtifactSet;
    if (ARTIFACTSETS[setName])
        response.json(ARTIFACTSETS[setName]);
    else
        response.json(ARTIFACTSETS["Unknown"]);
})