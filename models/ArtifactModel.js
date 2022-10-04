const MONGOOSE = require("mongoose");

const ARTIFACTSCHEMA = new MONGOOSE.Schema({
    userID:{
        type: String,
        required: true
    },
    set: {
        type: String,
        required: true
    },
    piece: {
        type: String,
        required: true
    },
    mainStat: {
        type: String,
        required: true
    },
    mainStatValue: {
        type: String,
        required: true
    },
    substatOne: {
        type: String,
        required: true
    },
    substatOneValue: {
        type: String,
        required: true
    },
    substatTwo: {
        type: String,
        required: true
    },
    substatTwoValue: {
        type: String,
        required: true
    },
    substatThree: {
        type: String,
        required: true
    },
    substatThreeValue: {
        type: String,
        required: true
    },
    substatFour: {
        type: String,
    },
    substatFourValue: {
        type: String,
    }
});

module.exports = MONGOOSE.model("Artifacts", ARTIFACTSCHEMA);