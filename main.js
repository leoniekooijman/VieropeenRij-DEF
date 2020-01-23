var code = ["0","0","0","0"];
    
function addCoin(){
    for(var x = 0; x < code.length ; x++){
        if(code[x] == "0"){
            code[x] = "1";

            var muntje = document.getElementsByTagName("td");
            muntje = Array.prototype.slice.call(muntje);
            muntje.reverse();
            muntje[x].style.backgroundColor = "blue";
            break;
        }
        
          
    }

    console.log(code);
}


