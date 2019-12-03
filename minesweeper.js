var allSquares = [];
var mineLocations = [];

function check(buttonClicked){
    console.log(buttonClicked);
}

window.onload=function() {
    var gameBoard = document.getElementById("game");
    
    function getSquares(){

        for(var x = 0; x < 10; x++){
            for(var y = 0; y < 10; y++){
                var button = document.createElement("button");
                var stringged = x.toString()+y.toString();
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

    getSquares();


}
