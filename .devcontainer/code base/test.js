//Create-Pattern-Of-Stars

function createPattern(numberoofrows){
    for (let i=0;i<numberofrows;i++){
        let stringtoprint= "";
        for (let j=0;j<i+1;j++){
            stringtoprint= stringtoprint + "*"
        }
        console.log(stringtoprint)
    }
    
}
createPattern(100)
