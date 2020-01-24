var speler = 1;
var spelBord = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
    
function addCoin(col){
  for(var row = 0; row < 6; row++){
      for (var col = 0; col < 7; col++){
        if(spelBord[row][col] == 0){
            spelBord[row][col] = 1;


            var muntje = document.getElementsByTagName("td");
            muntje = Array.prototype.slice.call(muntje);
            muntje[col].style.backgroundColor = "blue";
            break;
        } 
    }

}
        
    console.log(spelBord);
    
}