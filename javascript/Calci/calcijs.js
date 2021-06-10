
//function that display value
function dis(val)
{
    document.querySelector("input").value+=val;
    console.log(val);
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
}
  
//function that clear the display
function clr()
{
    document.getElementById("screen").value = "";
}
