// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1
var activePlayer = 1;


// Тоглогчдын цуглуулсан оноо хадгалах хувьсагч
var scores = [0, 0];


// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадлагах хувьсагч
var roundScore = 0;


// Шооны аль талаараа буусныг хадгалах хувьсагч 1-6  гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor(Math.random() * 6) + 1;
// window.document.querySelector('#score-0').textContent = dice;

// window.document.querySelector('#score-1').innerHTML = "<em>YES</em>" 

//Програм эхлэхэд бэлтгэх 
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
window.document.querySelector(".dice").style.display = "none";