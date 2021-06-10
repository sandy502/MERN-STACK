
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
// buttons.addEventListener("click" , e => {
//     if(e.target.matches("button")) {
//         console.log("btn");
//     }
// })
// buttons.forEach(function(buttons){
//     buttons.addEventListener("click" , calculateit);
// });
// function calculateit(event) {
//     const btnvalue = buttons.attribute;

//     if (btnvalue == "="){
//         if(display != ""){
//             display.value = eval(display.value);
//         }
//     }
//     else if (btnvalue == "cls"){
//         display.value = "";
//     }
//     else{
//         display.value +=btnvalue;
//         console.log(display);
//     };
// };
// let buttons = document.querySelectorAll("button.button");


