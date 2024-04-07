let Addition =document.getElementById("add")
let Substract = document.getElementById("Sub")
let Multi = document.getElementById("Mul")
let Division = document.getElementById("Divide")


Addition.addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    alert("Result: " + result);  
  });

  Substract.addEventListener
("click" , function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    alert( "result:",result)
  } )

  Multi.addEventListener("click",function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    alert("result:",result)
  })

  Division.addEventListener('click' , function(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2
    alert("result:",result)
  })
