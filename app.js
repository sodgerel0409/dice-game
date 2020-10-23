// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1
var activePlayer = 0;


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

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function()
{
    // 1 ээс 6 доторх санамсаргүй тоог гаргаж ирнэ
    var diceNumber = Math.floor(Math.random() * 6) + 1; 
    // шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display = "block";
    // буусан санамсаргүй тоонд харгалзах шооны зургыг гаргаж ирнэ
    diceDom.src="dice-" + diceNumber + ".png";
    //буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчын ээлжийн оноог хийнэ
    if(diceNumber !== 1 )
    {
        //1 ээс ялгаатай тоо буулаа. буусан тоог тологчид нэмж өгнө
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }
    else
    {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
        
        //хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго
        //үгүй бол идэвхтэй тоглогчийг 0 болго
        switchToNextPlayer();
    }
});

// Hold товчны эвент
document.querySelector(".btn-hold").addEventListener("click", function()
{
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //дэлгэц дээр оноог нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    // ээжлийн оноог нь 0 болгоно
    // тоглогчийн ээлийг солино
    if(scores[activePlayer]>=10)
    {
        document.getElementById("name-" + activePlayer).textContent = "Winner";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    }
    else
    {
        switchToNextPlayer();
    }
    
});

function switchToNextPlayer()
{
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //улаан цэг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // шоог түр алга болгоно
    diceDom.style.display = "none";
}

