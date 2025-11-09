

$(".b").on("click", function(){
// $(".a").css("color","red");
// $(".a").html("変化！！！");
// 文字色を変えるおまじない
    // alert(111111);

var random = Math.floor(Math.random()*5);
console.log(random,"ランダムな数字");

var random = Math.floor(Math.random()*3);
if (random===0){
    console.log("ぐー");
    $(".c").html("あいこ");
    $(".a2").html("");
    $(".a3").html("");
    $('.a').html('<img src="./g.png">');
    $("#p").get(0).play();

}else if(random===1){
    console.log("ぱー");
        $(".c").html("まけ");
            $(".a2").html("");
    $(".a3").html("");
     $('.a').html('<img src="./p.png">');

     $(".a").css("color","black");
}else if(random===2){
    console.log("ちょき");
           $(".c").html("かち");
               $(".a2").html("");
    $(".a3").html("");
     $('.a').html('<img src="./c.png">');

       $(".a").css("color","black");
}

    // この下は消さない
});






$(".t").on("click", function(){

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

     $(".a").css("color","black");
}else if(random===2){
    console.log("ちょき");
           $(".c").html("あいこ");
    $(".a").html("");
    $(".a3").html("");
     $('.a2').html('<img src="./c.png">');

       $(".a").css("color","black");
}

    // この下は消さない
});




$(".z").on("click", function(){


var random = Math.floor(Math.random()*5);
console.log(random,"ランダムな数字");

var random = Math.floor(Math.random()*3);
if (random===0){
    console.log("ぐー");
    $(".c").html("かち");
    $(".a1").html("");
    $(".a2").html("");
    $('.a3').html('<img src="./g.png">');
    $("#p").get(0).play();

}else if(random===1){
    console.log("ぱー");
        $(".c").html("あいこ");
                    $(".a").html("");
    $(".a2").html("");
     $('.a3').html('<img src="./p.png">');

     $(".a").css("color","black");
}else if(random===2){
    console.log("ちょき");
           $(".c").html("まけ");
                       $(".a").html("");
    $(".a2").html("");
     $('.a3').html('<img src="./c.png">');

       $(".a").css("color","black");
}

    // この下は消さない
});