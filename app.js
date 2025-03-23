let x = Math.floor((Math.random()*10)+1);
function guessNumber(){
    if(document.getElementById("number").value > x){
        document.getElementById("result").innerText = "Too high";
    }else if(document.getElementById("number").value < x){
        document.getElementById("result").innerText = "Too low";
    }else{
        document.getElementById("result").innerText = "Congratulations...You won!";
    }
}