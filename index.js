// var doc = document.getElementById("div1").childNodes
// console.log(doc)

function wordchecker() {
    var input = document.getElementById("input").value;
    var words = input.split(" ").reverse().join(" ");
    document.getElementById("result").innerText = words;
    console.log(words);

}