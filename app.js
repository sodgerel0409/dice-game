// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1
var activePlayer = 1;


// Тоглогчдын цуглуулсан оноо хадгалах хувьсагч
var scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадлагах хувьсагч
var roundScore = 0;


// Шооны аль талаараа буусныг хадгалах хувьсагч 1-6  гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө

// window.document.querySelector('#score-0').textContent = dice;

// window.document.querySelector('#score-1').innerHTML = "<em>YES</em>" 

//Програм эхлэхэд бэлтгэх 
document.getElementById('score-0').textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function()
{
    var diceNumber = Math.floor(Math.random() * 6) + 1; 
    diceDom.style.display = "block";
    diceDom.src="dice-" + diceNumber + ".png";
});