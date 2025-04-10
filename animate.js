/* State machine of animation */
const AnimationStateCount = {
	Intro: true,
	Sapflow: false,
	Sensors: false,
	Heating: false
} 

conf_btn1 = document.getElementById("conf_btn1").addEventListener("click", function() {
    alert("Configuration button 1 clicked!");
});

/* 

1) Make a global div that contain all the SVG elements
2) AFTER animation is done make the confirm buttons trabnition to the next SVG
3) Begin the next animation c-:
*/