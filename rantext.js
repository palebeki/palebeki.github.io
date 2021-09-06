var textarray = [
  "Every single minute you have spent is going to be worth waiting for.",
  "Anticipation makes everything better.",
  "Wait a while! Rome wasn't built in a day.",
  "Take a minute to breathe in... and out....",
  "Time for a sip of water.",
  "Time to take a breathe and smile, how a beautiful you are",
  "Stand up and stretch while this loads.",
  "Hold up! Let us get our codes in order.",
  "Waiting for Scotty to beam us up...",
  "Just a moment, while we put on some clothes.",
  "Here's your chance to catch a few blinks.",
  "Packets are flowing through the internet to you.",
  "Part of the pleasure is the build up. Are you ready?",
  "Your patience is much appreciated.",
  "If you're happy and you know it, clap your hands!",
  "Good things come to those who wait.",
  "Light speed ahead! or not...",
  "Forming the pixels on your screen.",
  "Go grab some coffee, I promise it'll be done by then!",
  "this this is heavy, one more second please",
];

function RndText() {
  var rannum = Math.floor(Math.random() * textarray.length);

  $("#random_text").fadeOut("fast", function () {
    $(this).text(textarray[rannum]).fadeIn("fast");
  });
}

$(document).ready(function () {
  RndText();
});


var inter = setInterval(function () {
  RndText();
}, 4000);
