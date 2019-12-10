var allSquares = [];
var mineLocations = [];
var minesdefused = 0;
var numberofmines = 5;

function check(buttonClicked){
    var tID = buttonClicked.toString();
    console.log(tID)
    console.log(mineLocations);
    if(mineLocations.includes((tID))){
        console.log("Game Over");
        document.getElementById(buttonClicked).setAttribute("style", "background-color:black; width:30px; height:30px");
    }else{
        console.log("safe");

    }
    

}

window.onload=function() {
    var gameBoard = document.getElementById("game");
    
    function getSquares(){

        for(var x = 0; x < 10; x++){
            for(var y = 0; y < 10; y++){
                var button = document.createElement("button");
                var stringged = ((x.toString())+(y.toString()));
                button.setAttribute("id", stringged);
                button.setAttribute("style", "width: 30px; height:30px; padding:0px");
                button.setAttribute("onclick","check("+stringged+");");
                gameBoard.appendChild(button);
                allSquares.push(button);
            }
            var lineBreaker = document.createElement("br");
            gameBoard.appendChild(lineBreaker);
        }
    }
    function placeMines(){
        for(var i=0; i<numberofmines;i++){
            var square = allSquares[Math.floor(Math.random() * allSquares.length) + 1]
            mineLocations.push(square.id);
            
            // print statement for testing
            console.log("Mine Placed in "+ square.id);

        }
    }


    getSquares();
    placeMines();


}
