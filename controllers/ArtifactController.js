const ARTIFACTS = require("../models/ArtifactModel");

module.exports = {
    getArtifacts: async(req, res) =>{
        try{
            const ITEMS = await ARTIFACTS.find({userID:req.user.id});
            res.render("artifacts.ejs", {
                userName: req.user.userName,
                artifacts: ITEMS.map(x => [x._id, x.set, x.piece])
            })
        }
        catch(err){
            console.log(err);
        }
    },
    addArtifact: async (req, res) =>{
        try{
            await ARTIFACTS.create({
                userID: req.user.id,
                set: req.body.ArtifactSet,
                piece: req.body.ArtifactPiece,
                mainStat: req.body.MainStat,
                mainStatValue: req.body.MainStatValue,
                substatOne: req.body.SubstatOne,
                substatOneValue: req.body.SubstatOneValue,
                substatTwo: req.body.SubstatTwo,
                substatTwoValue: req.body.SubstatTwoValue,
                substatThree: req.body.SubstatThree,
                substatThreeValue: req.body.SubstatThreeValue,
                substatFour: req.body.SubstatFour,
                substatFourValue: req.body.SubstatFourValue,
            });
            res.redirect("/artifacts");
        }
        catch(err){
            console.log(err);
        }
    },
    /*
    changeBookmarkName: async (req, res)=>{
        try{
            console.log(req.body);
            await BOOKMARKS.findOneAndUpdate({_id: req.body.postID},{
                name: req.body.bookmarkName
            })
            res.json('Bookmark Updated');
        }catch(err){
            console.log(err)
        }
    },
    */
    deleteArtifact: async (req, res) =>{
        console.log(req.body.artifactID);
        try{
            await ARTIFACTS.deleteOne({_id : req.body.artifactID});
            res.json("Item deleted");
        }
        catch(err){
            console.log(err);
        }
    }
}