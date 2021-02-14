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

document.getElementById("box1").addEventListener("mouseover", fadeAway1);
document.getElementById("box1").addEventListener("mouseout", fadeBack1);
document.getElementById("box2").addEventListener("mouseover", fadeAway2);
document.getElementById("box2").addEventListener("mouseout", fadeBack2);
document.getElementById("box3").addEventListener("mouseover", fadeAway3);
document.getElementById("box3").addEventListener("mouseout", fadeBack3);