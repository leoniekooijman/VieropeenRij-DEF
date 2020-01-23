var code = "0000";
function addCoin(){
    for (x = 1; x < code.length + 1; x++){
        if (code.charAt(x-1) == "0"){
            code = vervang(x);
        
            if (code.charAt(0) == "1"){
        var jojo = document.getElementsByTagName("td");
        jojo = Array.prototype.slice.call(jojo);
        jojo.reverse();
        jojo[x-1].style.backgroundColor = "blue";
            }
            break;
          
        }
    }
    
    console.log(code);

}

function vervang(index){
var eersteStuk = code.substr(0,index-1);
var tweedeStuk = code.substr(index);
return eersteStuk + "1" + tweedeStuk;
}
