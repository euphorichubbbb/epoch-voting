
  var i1 = 0;
  var i2 = 0;
  var i3 = 0;

  /*function myFunction1() {
    if (localStorage.myFunction1) {
      localStorage.myFunction1 = Number(localStorage.myFunction1)+1;
    } else {
      localStorage.myFunction1 = 1;
    }
    document.getElementById("demo").innerHTML = localStorage.myFunction1;
    
  }
   
        
    
    function myFunction2() {
        if (localStorage.myFunction2) {
          localStorage.myFunction2 = Number(localStorage.myFunction2)+1;
        } else {
          localStorage.myFunction2 = 1;
        }
        document.getElementById("demo").innerHTML = localStorage.myFunction2;
        
      }
      function myFunction3() {
        if (localStorage.myFunction3) {
          localStorage.myFunction3 = Number(localStorage.myFunction3)+1;
        } else {
          localStorage.myFunction3 = 1;
        }
        document.getElementById("demo").innerHTML = localStorage.myFunction3;
        
      }*/
      var i1 = 0;
      function myFunction1(){
        i1++;
          document.getElementById('inc1').value = i1;
          sessionStorage.setItem("Inc1", i1);
      }
      var i2 = 0;
      function myFunction2(){
        i2++;
          document.getElementById('inc2').value = i2;
          sessionStorage.setItem("Inc2", i2);
      }
      var i3 = 0;
      function myFunction3(){
          i3++;
          document.getElementById('inc3').value = i3;
          sessionStorage.setItem("Inc3", i3);
      }
      
