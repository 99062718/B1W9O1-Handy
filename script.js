var page;

function fadeAway1(){
	document.getElementById("text1").style.opacity = "1";
	document.getElementById("img1").style.opacity = "0.3";
}

function fadeBack1(){
	document.getElementById("text1").style.opacity = "0";
	document.getElementById("img1").style.opacity = "1";
}

function fadeAway2(){
	document.getElementById("text2").style.opacity = "1";
	document.getElementById("img2").style.opacity = "0.3";
}

function fadeBack2(){
	document.getElementById("text2").style.opacity = "0";
	document.getElementById("img2").style.opacity = "1";
}

function fadeAway3(){
	document.getElementById("text3").style.opacity = "1";
	document.getElementById("img3").style.opacity = "0.3";
}

function fadeBack3(){
	document.getElementById("text3").style.opacity = "0";
	document.getElementById("img3").style.opacity = "1";
}

function invert1(){
	document.getElementById("box4").style.backgroundColor = "#222931";
	document.getElementById("text4").style.color = "white";
	document.getElementById("text5").style.color = "white";
}

function revert1(){
	document.getElementById("box4").style.backgroundColor = "#ffe718";
	document.getElementById("text4").style.color = "black";
	document.getElementById("text5").style.color = "black";
}

function invert2(){
	document.getElementById("box5").style.backgroundColor = "#222931";
	document.getElementById("text6").style.color = "white";
	document.getElementById("text7").style.color = "white";
}

function revert2(){
	document.getElementById("box5").style.backgroundColor = "#ffe718";
	document.getElementById("text6").style.color = "black";
	document.getElementById("text7").style.color = "black";
}

function invert3(){
	document.getElementById("box6").style.backgroundColor = "#222931";
	document.getElementById("text8").style.color = "white";
	document.getElementById("text9").style.color = "white";
}

function revert3(){
	document.getElementById("box6").style.backgroundColor = "#ffe718";
	document.getElementById("text8").style.color = "black";
	document.getElementById("text9").style.color = "black";
}

function buttonHover(){
	document.getElementById("button").style.backgroundColor = "#222931";
	document.getElementById("button").style.color = "white";
}

function buttonNotHover(){
	document.getElementById("button").style.backgroundColor = "white";
	document.getElementById("button").style.color = "black";
}

if(page == "home"){
	document.getElementById("box1").addEventListener("mouseover", fadeAway1);
	document.getElementById("box1").addEventListener("mouseout", fadeBack1);
	document.getElementById("box2").addEventListener("mouseover", fadeAway2);
	document.getElementById("box2").addEventListener("mouseout", fadeBack2);
	document.getElementById("box3").addEventListener("mouseover", fadeAway3);
	document.getElementById("box3").addEventListener("mouseout", fadeBack3);
}

document.getElementById("box4").addEventListener("mouseover", invert1);
document.getElementById("box4").addEventListener("mouseout", revert1);
document.getElementById("box5").addEventListener("mouseover", invert2);
document.getElementById("box5").addEventListener("mouseout", revert2);
document.getElementById("box6").addEventListener("mouseover", invert3);
document.getElementById("box6").addEventListener("mouseout", revert3);
document.getElementById("button").addEventListener("mouseover", buttonHover);
document.getElementById("button").addEventListener("mouseout", buttonNotHover);