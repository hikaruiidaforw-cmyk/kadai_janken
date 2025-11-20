// 時間があれば実装したいこと
// ①hitoをぶるぶると震えさせる
// ②セーフとアウトに音を入れる。
// ③音楽を流す
// ④連勝記録
// ⑤5回生き残るとハードモード(ハードモードは下からも5匹)
// ⑥ワニの目の周りを白くする



$(".wanib1,.wanib2,.wanib3,.wanib4,.wanib5").on("click",function(){
$(".wani1,.wani2,.wani3,.wani4,.wani5").css("animation-name", "none");

var random = Math.floor(Math.random()*5);
var kekka = random +1 ;
var kekkaClass = ".wani"+ kekka;

console.log("結果は",kekkaClass);
$(kekkaClass).css("animation-name","wani")
})

$(".hito").hide();
function startGame(buttonIndex){

  var hitoSelector = ".hito" + buttonIndex;
  $(hitoSelector).show();

  var allWani = ".wani1,.wani2,.wani3,.wani4,.wani5";
  $(allWani).css("animation-name", "none");

  var random = Math.floor(Math.random() * 5) + 1;  
  var waniSelector = ".wani" + random;

  console.log("押したボタン:", buttonIndex, " / 動くワニ:", random);

  var waniElem = $(waniSelector)[0];
  if (waniElem) {
    void waniElem.offsetWidth; 
  }

  $(waniSelector).css("animation-name", "wani");

  var animationTime = 1000; 

  if (random === buttonIndex) {
 
    setTimeout(function(){
      $(hitoSelector).hide();
    }, animationTime);

  } else {

    setTimeout(function(){
      $(hitoSelector).hide();
    }, animationTime + 5000);
  }
}

$(".wanib1").on("click", function(){
  startGame(1);
});

$(".wanib2").on("click", function(){
  startGame(2);
});

$(".wanib3").on("click", function(){
  startGame(3);
});

$(".wanib4").on("click", function(){
  startGame(4);
});

$(".wanib5").on("click", function(){
  startGame(5);
});
$(".wanib1").on("click", function(){
 $(".jkp").get(0).play();


    // この下は消さない
});