var randm = ["red", "blue", "green", "yellow"];
var level = 1;
var count = 1;
var sol = [];
var usr = [];
var gameover = 0;
var start=false;

$(document).keypress(function() {
    if(!start)
  {comp();
    start=true;
}
});
  $(".btn").click(function() {
    uss = this.id;
    animate(uss);
    playSound(uss);
    usr.push(uss);
    checkanswer((usr.length)-1);

});

function comp() {
  $("h1").text("Level " + level);
  var a = randm[Math.floor(Math.random() * 4)];
  sol.push(a);
  $("#" + a).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(a);
  usr = [];
}


function checkanswer(curlevel) {
    if (sol[curlevel] === usr[curlevel]) {
  if (sol.length===usr.length) {
    level++;
    setTimeout(function(){
        comp();
    },1000);

  } }
  else {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    playSound("wrong")
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 1000);
    startover();
  }
}
function startover(){
    level=0;
    start=false;
    sol=[];
}

function playSound(a) {
  var audio = new Audio("./sounds/" + a + ".mp3");
  audio.play();
}

function animate(a) {
  $("." + a).addClass("pressed");
  setTimeout(function() {
    $("." + a).removeClass("pressed");
  }, 100);
}
