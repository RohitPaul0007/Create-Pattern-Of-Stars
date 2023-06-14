# Create-Pattern-Of-Stars
function createPattern(numberoofrows){
    for (var i=0;i<numberofrows;i++){
        var stringtoprint= "";
        for (var j=0;j<i+1;j++){
            stringtoprint= stringtoprint + "*"
        }
        console.log(stringtoprint)
    }
}
createPattern(100)
