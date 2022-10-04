let previousSelected = {
    MainStatOption: document.getElementById("MainStat").options[document.getElementById("MainStat").selectedIndex],
    SubstatOneOption: document.getElementById("SubstatOne").options[document.getElementById("SubstatOne").selectedIndex],
    SubstatTwoOption: document.getElementById("SubstatTwo").options[document.getElementById("SubstatTwo").selectedIndex],
    SubstatThreeOption: document.getElementById("SubstatThree").options[document.getElementById("SubstatThree").selectedIndex],
    SubstatFourOption: document.getElementById("SubstatFour").options[document.getElementById("SubstatFour").selectedIndex]
}

document.querySelectorAll(".fa-trash").forEach(x => x.addEventListener("click", deleteArtifact));
document.querySelectorAll(".stats").forEach(x => x.addEventListener("click", test));

async function deleteArtifact(){
    console.log(this.parentNode.id);
    try{
        const res = await fetch("artifacts/deleteArtifact", {
            method: "delete",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                artifactID : this.parentNode.id
            })
        });
        const data = await res.json();
        console.log(data);
        location.reload();
    }
    catch(err){
        console.log(err);
    }
}

function test(event){
    const SELECTEDOPTION = event.target.parentNode.options[event.target.parentNode.selectedIndex];
    const SELECTED = `${event.target.parentNode.id}Option`
    const PREVIOUSSELECTEDOPTION = previousSelected[SELECTED];

    document.querySelectorAll(`.${PREVIOUSSELECTEDOPTION.classList[0]}`).forEach(x => x.classList.toggle("hide"));
    document.querySelectorAll(`.${SELECTEDOPTION.classList[0]}`).forEach(x => x.classList.toggle("hide"));
    previousSelected[SELECTED] = SELECTEDOPTION;
}
