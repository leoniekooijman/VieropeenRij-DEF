var spelRij1 = [0, 0, 0, 0, 0, 0];
var spelRij2 = [0, 0, 0, 0, 0, 0];
var spelRij3 = [0, 0, 0, 0, 0, 0];
var spelRij4 = [0, 0, 0, 0, 0, 0];
var spelRij5 = [0, 0, 0, 0, 0, 0];
var spelRij6 = [0, 0, 0, 0, 0, 0];
var spelRij7 = [0, 0, 0, 0, 0, 0];

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
// Rij 1

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
// Rij 2

function geel3(){
  for(var x = 0; x < spelRij3.length ; x++){
    if(spelRij3[x] == 0){
        spelRij3[x] = 1;

        var r3 = document.getElementById("rijtje3");
        var geel3 = r3.getElementsByTagName("td");
        geel3 = Array.prototype.slice.call(geel3);
        geel3.reverse();
        geel3[x].style.backgroundColor = "yellow";
        break;
      }  
    }
  }

  function rood3(){
    for(var x = 0; x < spelRij3.length ; x++){
      if(spelRij3[x] == 0){
          spelRij3[x] = 1;
  
          var r3 = document.getElementById("rijtje3");
          var rood3 = r3.getElementsByTagName("td");
          rood3 = Array.prototype.slice.call(rood3);
          rood3.reverse();
          rood3[x].style.backgroundColor = "red";
          break;
            
            }
        }
      }

      // Rij 3

      function geel4(){
        for(var x = 0; x < spelRij4.length ; x++){
          if(spelRij4[x] == 0){
              spelRij4[x] = 1;
      
              var r4 = document.getElementById("rijtje4");
              var geel4 = r4.getElementsByTagName("td");
              geel4 = Array.prototype.slice.call(geel4);
              geel4.reverse();
              geel4[x].style.backgroundColor = "yellow";
              break;
            }  
          }
        }
      
        function rood4(){
          for(var x = 0; x < spelRij4.length ; x++){
            if(spelRij4[x] == 0){
                spelRij4[x] = 1;
        
                var r4 = document.getElementById("rijtje4");
                var rood4 = r4.getElementsByTagName("td");
                rood4 = Array.prototype.slice.call(rood4);
                rood4.reverse();
                rood4[x].style.backgroundColor = "red";
                break;
                  
                  }
              }
            }
            // Rij 4

            function geel5(){
              for(var x = 0; x < spelRij5.length ; x++){
                if(spelRij5[x] == 0){
                    spelRij5[x] = 1;
            
                    var r5 = document.getElementById("rijtje5");
                    var geel5 = r5.getElementsByTagName("td");
                    geel5 = Array.prototype.slice.call(geel5);
                    geel5.reverse();
                    geel5[x].style.backgroundColor = "yellow";
                    break;
                  }  
                }
              }
            
              function rood5(){
                for(var x = 0; x < spelRij5.length ; x++){
                  if(spelRij5[x] == 0){
                      spelRij5[x] = 1;
              
                      var r5 = document.getElementById("rijtje5");
                      var rood5 = r5.getElementsByTagName("td");
                      rood5 = Array.prototype.slice.call(rood5);
                      rood5.reverse();
                      rood5[x].style.backgroundColor = "red";
                      break;
                        
                        }
                    }
                  }
                  // Rij 5

                  function geel6(){
                    for(var x = 0; x < spelRij6.length ; x++){
                      if(spelRij6[x] == 0){
                          spelRij6[x] = 1;
                  
                          var r6 = document.getElementById("rijtje6");
                          var geel6 = r6.getElementsByTagName("td");
                          geel6 = Array.prototype.slice.call(geel6);
                          geel6.reverse();
                          geel6[x].style.backgroundColor = "yellow";
                          break;
                        }  
                      }
                    }
                  
                    function rood6(){
                      for(var x = 0; x < spelRij6.length ; x++){
                        if(spelRij6[x] == 0){
                            spelRij6[x] = 1;
                    
                            var r6 = document.getElementById("rijtje6");
                            var rood6 = r6.getElementsByTagName("td");
                            rood6 = Array.prototype.slice.call(rood6);
                            rood6.reverse();
                            rood6[x].style.backgroundColor = "red";
                            break;
                              
                              }
                          }
                        }
                        // Rij 6

                        function geel7(){
                          for(var x = 0; x < spelRij7.length ; x++){
                            if(spelRij7[x] == 0){
                                spelRij7[x] = 1;
                        
                                var r7 = document.getElementById("rijtje7");
                                var geel7 = r7.getElementsByTagName("td");
                                geel7 = Array.prototype.slice.call(geel7);
                                geel7.reverse();
                                geel7[x].style.backgroundColor = "yellow";
                                break;
                              }  
                            }
                          }
                        
                          function rood7(){
                            for(var x = 0; x < spelRij7.length ; x++){
                              if(spelRij7[x] == 0){
                                  spelRij7[x] = 1;
                          
                                  var r7 = document.getElementById("rijtje7");
                                  var rood7 = r7.getElementsByTagName("td");
                                  rood7 = Array.prototype.slice.call(rood7);
                                  rood7.reverse();
                                  rood7[x].style.backgroundColor = "red";
                                  break;
                                    
                                    }
                                }
                              }



 
