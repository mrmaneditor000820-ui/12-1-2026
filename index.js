// var doc = document.getElementById("div1").childNodes
// console.log(doc)

// function wordchecker() {
//     var input = document.getElementById("input").value;
//     var words = input.split(" ").reverse().join(" ");
//     document.getElementById("result").innerText = words;
//     console.log(words);

// }

// function increment() {
//     var count = document.getElementById("value")
//   var count = count.innerText++

//   console.log("count=>", count);
// }

// function decrement() {
//         var count = document.getElementById("value")
//   var count = count.innerText--
// }
// function reset() {
// var count = document.getElementById("value")
// var count = count.innerText=0
// }
// var count = document.getElementById("value");
// function countAction(action) {
//   if (action === "inct") {
//     count.innerText++;
//     console.log("count", count);
//   } else if (action === "dect") {
//     count.innerText--;
//     console.log("count", count);
//   } else if (action === "rest") {
//     count.innerText = 0;
//     console.log("count", count);
//   } else {
//     console.log("error");
//   }
// }
// create same counter with switch statement

// function showPassword() {
//   var password = document.getElementById("pass")
//   console.log("pass=>", password);
//   if(password.type =="password"){
//     password.type = "text"
//   }
// }

// function checkNumber() {
//   var number = document.getElementById("number").value;
//   var message = document.getElementById("para");
//   console.log("number=>", number);
//   if (number % 2 == 0) {
//     message.innerText = "number is even " + number;
//     message.style.color = "green";
//   } else {
//     message.innerText = "number is odd " + number;
//     message.style.color = "red";
//   }
// }
// function checkNumber() {
//   var number = document.getElementById("number").value;
//   var message = document.getElementById("para");
//   console.log("number=>", number);

//   if (number == "") return alert("please enter number");
//   if (number == 0) {
//     para.innerText = "number must be greater than zero";
//     message.style.color = "red";
//   }
//   if (number == 1) return false;
//   if (number == 2) return false;

//   for (let i = 2; i < number; i++)
//     if (number % i == 0) {
//       message.innerText = "number is not prime" + number;
//       message.style.color = "red";
//       return;
//     } else {
//       message.innerText = "number is prime " + number;
//       message.style.color = "green";
//     }
// }

// var paragraph = document.getElementById("para")

// var text = document.createTextNode("this text from javascript")

// paragraph.appendChild(text)

// var listParent = document.getElementById("ul")

// var listTag = document.createElement('li')

// var list = document.createTextNode("text inside list li")

// var listWithText = listTag.innerHTML= list

// listParent.appendChild(listWithText)

var btn = document.getElementById("btn")

btn.addEventListener("click",function(){
var input = document.getElementById("input").value
console.log("value=>",input)

var listDiv = document.getElementById("div")


var paragraph = document.createElement('p')

var paraText = document.createTextNode(input)
paragraph.appendChild(paraText)
listDiv.appendChild(paragraph)
if (input===""){
    alert("please enter some text")
    listDiv.removeChild(paragraph)
    return
}
paraOnTop = listDiv.firstChild
listDiv.insertBefore(paragraph,paraOnTop)

listDiv.removeChild(paraOnTop)



var input = document.getElementById("input").value = ""
// localStorage.setItem("list key",input)
// localStorage.getItem("list key")
} )

var deleteChild = document.getElementById("delete")
deleteChild.addEventListener("click",function(){

})

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);