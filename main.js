function displayHB() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav"){
    x.className += " responsive";
  } 
  else{
    x.className = "topnav";
  }
} 

function homeWarp() {
	window.open('index.html', '_self');
}

function infoWarp() {
	window.open('information.html', '_self');
}

function codeWarp() {
	window.open('codecreations.html', '_self');
}

function signWarp() {
	window.open('signin.html', '_self');
}

function javaWarp() {
	window.open('codecreations/java.html', '_self');
}

function hcjWarp() {
	window.open('codecreations/html.html', '_self');
}

function isValid(){
	var password = document.getElementById("pword").value;
	if (password == "2036"){
		window.open("du13-dd7234sf.html", "_self")
	}
	else{
		window.open("signinfail.html", "_self")
	}
}
