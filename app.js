let x = Math.floor((Math.random()*10)+1);
let count = 0;
function guessNumber(){
  
        if(count < 3){
            if(document.getElementById("number").value > x){
                document.getElementById("result").innerText = "Too high";
            }else if(document.getElementById("number").value < x){
                document.getElementById("result").innerText = "Too low";
            }else{
                document.getElementById("result").innerText = "Congratulations...You won!";
            }
            count++;
            document.getElementById("round").innerText = "Round " + count;
        }else{
            document.getElementById("result").innerText = "Game over";
            let guessBtn =  document.getElementById("guessButton");
            document.getElementById("result").innerText = "";
            document.getElementById("round").innerText = "";
            guessBtn.disabled = true;
            alert("Game over... try again");
        }
}


    
