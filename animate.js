const startBtn = document.getElementById("btn-slideShow");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

startBtn.addEventListener("click", (e) => {
	console.log("Button has been clicked");
	/* Text svg1 show after 1s */
	startBtn.classList.add("disabled");
	one.classList.remove("disabled");
	one.classList.add("one");
	document.getElementById("text-pos-1").classList.toggle("hidden");
	console.log("page passed by timer");
	setTimeout(transition1, 5000);
  });
function transition1() {
	console.log("page passed by function 1");
	one.classList.remove("enabled");
	one.classList.add("disabled");
	two.classList.remove("disabled");
	two.classList.add("enabled");
	two.classList.add("two");
	setTimeout(transition2, 5000);
} /*
function transition2() {
	console.log("page passed by function 2");
	two.classList.remove("enabled");
	two.classList.add("disabled");
	three.classList.remove("disabled");
	three.classList.add("enabled");
	three.classList.add("three");
	setTimeout(transition3, 5000);
}
function transition3() {
	console.log("page passed by function 3");
	three.classList.remove("enabled");
	three.classList.add("disabled");
	four.classList.remove("disabled");
	four.classList.add("enabled");
	four.classList.add("four");
	setTimeout(backToStart, 5000);
}
function backToStart() {
	console.log("page passed by function 4");
	four.classList.remove("enabled");
	four.classList.add("disabled");
	startBtn.classList.remove("disabled");
	startBtn.classList.add("enabled");
}

*/