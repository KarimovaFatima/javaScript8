let firstNum = Number(prompt("Rəqəmi daxil edin, zəhmət olmasa"));
// console.log("🚀 ~ firstNum:", firstNum);
let secondNum = Number(prompt("İkinci rəqəmi daxil edin, zəhmət olmasa"));
// console.log("🚀 ~ secondNum:", secondNum);
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const answerDAta = document.querySelector("#answer");
if(NaN==firstNum && NaN==secondNum || firstNum==0 && secondNum==0){
    alert("Zəhmət olmasa boşluqları doldurun !")
}
addition.addEventListener("click", () =>{
    console.log(firstNum, secondNum);
    let result = firstNum + secondNum;
    answerDAta.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result)   
});

subtraction.addEventListener("click", () =>{
    console.log(firstNum, secondNum);
    let result = firstNum - secondNum;
    answerDAta.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result)  
});

multiplication.addEventListener("click", () =>{
    console.log(firstNum, secondNum);
    let result = firstNum * secondNum;
    answerDAta.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result)  
});

division.addEventListener("click", () =>{
    console.log(firstNum, secondNum);
    let result = firstNum / secondNum;
    answerDAta.innerHTML = result;
    console.log("🚀 ~ addition.addEventListener ~ result:", result) 
});
