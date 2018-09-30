const numbers = document.querySelectorAll("button");
const output = document.getElementById('output');


let clear = false;
const element = document.createElement('p');
element.style.float = "right";
element.style.padding = "20px";
element.style.fontSize = "30px";
element.style.fontFamily = "Arial";
output.appendChild(element);
let equation = "";
let operators = ["/", "*", "+", "-"];


for(i=0; i<numbers.length; i++){
  if(numbers[i].innerHTML == "="){
    numbers[i].addEventListener('click', calculate);
  }else if(numbers[i].innerHTML == "DEL"){
    numbers[i].addEventListener('click', del);
  }
  else{
    numbers[i].addEventListener('click', addNum);
  }
}


function addNum(){
  if(clear){
    equation="";
  }
  const value = this.innerHTML;
  equation+=value;
  element.innerHTML = equation;
  clear=false;
}


function calculate(){
  let = evaluate = true;
  for(i=0; i<equation.length; i++){
    if(operators.includes(equation[i]) && operators.includes(equation[i+1])){
      equation="ERROR";
      element.innerHTML = equation;
      output.appendChild(element);
      evaluate = false;
      break;
    }
  }
  if(evaluate){
    const final = eval(equation);
    equation=final;
    element.innerHTML = equation;
    output.appendChild(element);
  }
  clear=true;
}


function del(){
  equation = equation.substring(0, equation.length - 1);
  element.innerHTML = equation;
}
