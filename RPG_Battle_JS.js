var monstre1 = document.getElementById("Monstre1")
var monstre2 = document.getElementById("Monstre2")
var monstre3 = document.getElementById("Monstre3")
var attaquer = document.getElementById("Attaquer")
var défendre = document.getElementById("Défense")
var endormir = document.getElementById("AttaqueSpé1")
var assommer = document.getElementById("AttaqueSpé2")
var soin = document.getElementById("AttaqueSpé3")
var glace = document.getElementById("AttaqueSpé4")

monstre1.onmouseover = function(){
	document.getElementById("infobulle1").style.visibility = "visible" 
}

monstre2.onmouseover = function(){
	document.getElementById("infobulle2").style.visibility = "visible"
}

monstre3.onmouseover = function(){
	document.getElementById("infobulle3").style.visibility = "visible"
}