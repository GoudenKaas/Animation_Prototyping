const startBtn = document.getElementById("btn-slideShow");
startBtn.addEventListener("click", (e) => {
	console.log("Button has been clicked");
	/* Text svg1 show after 1s */
	startBtn.classList.add("disabled");
	document.getElementById("one").classList.remove("disabled");
	document.getElementById("one").classList.add("enabled");
	document.getElementById("one").classList.add("one");
	console.log("page passed by timer");
	setTimeout(transition1, 5000);
  });
function transition1() {
	console.log("page passed by function 1");
	document.getElementById("one").classList.remove("enabled");
	document.getElementById("one").classList.add("disabled");
	document.getElementById("two").classList.remove("disabled");
	document.getElementById("two").classList.add("enabled");
	document.getElementById("two").classList.add("two");
	setTimeout(transition2, 5000);
}
function transition2() {
	console.log("page passed by function 2");
	document.getElementById("two").classList.remove("enabled");
	document.getElementById("two").classList.add("disabled");
	document.getElementById("three").classList.remove("disabled");
	document.getElementById("three").classList.add("enabled");
	document.getElementById("three").classList.add("three");
	setTimeout(transition3, 5000);
}
function transition3() {
	console.log("page passed by function 3");
	document.getElementById("three").classList.remove("enabled");
	document.getElementById("three").classList.add("disabled");
	document.getElementById("four").classList.remove("disabled");
	document.getElementById("four").classList.add("enabled");
	document.getElementById("four").classList.add("four");
	setTimeout(backToStart, 5000);
}
function backToStart() {
	console.log("page passed by function 4");
	document.getElementById("four").classList.remove("enabled");
	document.getElementById("four").classList.add("disabled");
	startBtn.classList.remove("disabled");
	startBtn.classList.add("enabled");
}

