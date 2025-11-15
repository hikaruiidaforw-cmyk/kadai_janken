

$(".b").on("click", function(){
 $(".jkp").get(0).play();


var random = Math.floor(Math.random()*5);
console.log(random,"ランダムな数字");

var random = Math.floor(Math.random()*3);
if (random===0){
    console.log("ぐー");
    $(".c").html("あいこ").fadeOut(5000);
    $(".a2").html("");
    $(".a3").html("");
    $('.a').html('<img src="./g.png">').fadeOut(5000);
   

}else if(random===1){
    console.log("ぱー");
    $(".c").html("まけ").fadeOut(5000);
    $(".a2").html("");
    $(".a3").html("");
    $('.a').html('<img src="./p.png" >').fadeOut(5000);

}else if(random===2){
    console.log("ちょき");
    $(".c").html("かち").fadeOut(5000);
    $(".a2").html("");
    $(".a3").html("");
    $('.a').html('<img src="./c.png">').fadeOut(5000);
    $(".ten").html(1);
}

    // この下は消さない
});



$(".t").on("click", function(){
     $(".jkp").get(0).play();

var random = Math.floor(Math.random()*5);
console.log(random,"ランダムな数字");

var random = Math.floor(Math.random()*3);
if (random===0){
    console.log("ちょき");
    $(".c").html("まけ");
    $(".a").html("");
    $(".a3").html("");
    $('.a2').html('<img src="./g.png">');

}else if(random===1){
    console.log("ぱー");
    $(".c").html("かち");
    $(".a").html("");
    $(".a3").html("");
    $('.a2').html('<img src="./p.png">');
    $(".ten").html(1);

}else if(random===2){
    console.log("ちょき");
    $(".c").html("あいこ");
    $(".a").html("");
    $(".a3").html("");
    $('.a2').html('<img src="./c.png">');

}

    // この下は消さない
});


$(".z").on("click", function(){
     $(".jkp").get(0).play();


var random = Math.floor(Math.random()*5);
console.log(random,"ランダムな数字");

var random = Math.floor(Math.random()*3);
if (random===0){
    console.log("ぐー");
    $(".c").html("かち");
    $(".a1").html("");
    $(".a2").html("");
    $('.a3').html('<img src="./g.png">');
    $(".ten").html(1);
    $("#p").get(0).play();

}else if(random===1){
    console.log("ぱー");
    $(".c").html("あいこ");
    $(".a").html("");
    $(".a2").html("");
    $('.a3').html('<img src="./p.png">');

}else if(random===2){
    console.log("ちょき");
    $(".c").html("まけ");
    $(".a").html("");
    $(".a2").html("");
    $('.a3').html('<img src="./c.png">');

}

    // この下は消さない
});