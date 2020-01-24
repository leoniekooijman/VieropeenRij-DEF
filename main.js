var spelRij1 = [0, 0, 0, 0, 0, 0];
var spelRij2 = [0, 0, 0, 0, 0, 0];

function geel1(){
  for(var x = 0; x < spelRij1.length ; x++){
    if(spelRij1[x] == 0){
        spelRij1[x] = 1;

        var r1 = document.getElementById("rijtje1");
        var geel1 = r1.getElementsByTagName("td");
        geel1 = Array.prototype.slice.call(geel1);
        geel1.reverse();
        geel1[x].style.backgroundColor = "yellow";
        break;
      }  
    }
  }

  function rood1(){
    for(var x = 0; x < spelRij1.length ; x++){
      if(spelRij1[x] == 0){
          spelRij1[x] = 1;

          var r1 = document.getElementById("rijtje1");
          var rood1 = r1.getElementsByTagName("td");
          rood1 = Array.prototype.slice.call(rood1);
          rood1.reverse();
          rood1[x].style.backgroundColor = "red";
          break;
            
            }
        }
}

function geel2(){
  for(var x = 0; x < spelRij2.length ; x++){
    if(spelRij2[x] == 0){
        spelRij2[x] = 1;

        var r2 = document.getElementById("rijtje2");
        var geel2 = r2.getElementsByTagName("td");
        geel2 = Array.prototype.slice.call(geel2);
        geel2.reverse();
        geel2[x].style.backgroundColor = "yellow";
        break;
      }  
    }
  }

  function rood2(){
    for(var x = 0; x < spelRij2.length ; x++){
      if(spelRij2[x] == 0){
          spelRij2[x] = 1;
  
          var r2 = document.getElementById("rijtje2");
          var rood2 = r2.getElementsByTagName("td");
          rood2 = Array.prototype.slice.call(rood2);
          rood2.reverse();
          rood2[x].style.backgroundColor = "red";
          break;
            
            }
        }
}
 
