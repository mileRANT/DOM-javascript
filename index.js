alert("This is within external index.js file. Hello")

document.querySelector("h1").innerHTML = "Good Bye";

//document.getElementsByTagName("li")       //gives an array
document.getElementsByTagName("li")[2].style.color = "purple";

document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";

document.getElementsByTagName("input")[0].click();

document.getElementById("title").innerHTML = "Hello Again!";

document.querySelector("#title").innerHTML = "And then bye again.";

document.querySelector("li a").innerHTML = "Google google google";

document.querySelector("button").classList.add("invisible"); //this adds class to it. proper way for manipulating styles. let css handle it.
// document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML = "<em>Bah</em>";
document.querySelector("h1").textContent = "Books";

// attribute manipulation
// document.querySelector("a").getAttribute("href")
document.querySelector("a").setAttribute("href", "https://www.bing.com");