var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var mysteryBox = document.getElementById('MysteryBox');
var geheimtext = document.getElementById('geheimtext');

button1.onclick = function(){
	mysteryBox.style.backgroundColor = 'white';
	geheimtext.style.color = 'white';
}
button2.onclick = function(){
	geheimtext.style.color = 'black';
	mysteryBox.style.backgroundColor= 'black';
}