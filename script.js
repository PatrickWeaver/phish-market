$(document).ready(function(){

  var rounds = [
    [
      [
        "", "twitter1.png", "scam", "Great Job! You found the scam!"
      ],
      [
        "", "twitter2.png", "real", "Oops! The real scam was option 1"
      ],
      [
        "", "twitter3.png", "real", "Oops! The real scam was option 1"
      ],
      "<div class='explanation'><h3>Some clues that option 1 was a scam are:</h3><ol><li><strong>URL Shortener instead of real URL:</strong>A URL shortener can be useful to share a long web address, but it can also mask a long suspicious URL.</li></div>"
    ],
    [
      [
        "", "facebook1.png", "real"

      ],
      [
        "", "facebook2.png", "real"

      ],
      [
        "", "facebook3.png", "scam"
      ]

    ],
    [
      [
        "", "instagram1.png", "scam"

      ],
      [
        "", "instagram2.png", "real"

      ],
      [
        "", "instagram3.png", "real"
      ]
    ]
  ]

  var round = 0;
  var totalRounds = 3;
  var options;
  var realChosen = 0;
  var scamsChosen = 0;
  var position = 0;
  var transition = false;
  var slideDelay = 1000;

  function nextOptions() {
    options = $( ".option-box" );
    for (var i = 0; i < 3; i++) {
      var addContent = "";
      addContent += "<div class='option-content'>";
      if (rounds[round][i][0] != "") {
        addContent += rounds[round][i][0] + "<br><br>";
      }
      addContent += "<div  class='option-image'><img src='images/" + rounds[round][i][1] + "'></div></div>";
      //$( addContent ).appendTo($( options[i] ));
      $( options[i] ).append(addContent);
    }
  }


  $( "button#start" ).click(function() {
    $( "body" ).css("background-image", "none");
    $( "#start-container" ).hide();
    $( "#start-button-container" ).hide();
    $( "#game" ).show();
    nextOptions();
  });

  //var optionsWidth = $( "#option-boxes-container" ).outerWidth();



  $( "#right-button" ).click(function() {
    if (!transition){
      transition = true;
      var optionsWidth = $(window).width()
      if (position > -2){
        var hideSlide = $( "#option-" + (position + 1) );
        //hideSlide.css("position", "absolute");
        //hideSlide.css("top", "0px");
        hideSlide.hide("slide", {direction: "left"}, slideDelay, function() {
          //hideSlide.css("position", "static");
        });
        $( "#option-" + (position + 2) ).show("slide", {direction: "right"}, slideDelay, function() {
          position += 1;
          showCorrectButtons();
          transition = false;
        });
      }
    }
  });

  $( "#left-button" ).click(function() {
    if (!transition){
      transition = true;
      if (position > 0){
        var hideSlide = $( "#option-" + (position + 1) );
        //hideSlide.css("position", "absolute");
        //hideSlide.css("top", "0px");
        hideSlide.hide("slide", {direction: "right"}, slideDelay, function() {
          //hideSlide.css("position", "static");
        });
        $( "#option-" + (position) ).show("slide", {direction: "left"}, slideDelay, function() {
          position -= 1;
          showCorrectButtons();
          transition = false;
        });
      }
    }
  });

  function showCorrectButtons() {
    if (position === 1) {
      $( "#right-button").show();
      $( "#left-button" ).show();
    }
    if (position === 0) {
      $( "#left-button" ).hide();
      $( "#right-button").show();
    }
    if (position === 2) {
      $( "#right-button" ).hide();
      $( "#left-button" ).show();
    }
  }


  $( "#scam-button").click(function() {
    if (rounds[round][position][2] === "scam") {
      $( "#alert-container" ).show();
      $( ".alert-content").html("<h2>" + rounds[round][position][3] + "</h2>" + rounds[round][3]);
      $( "#scam-alert" ).show();
      scamsChosen += 1;
    } else {
      $( "#alert-container" ).show();
      $( ".alert-content").html("<h2>" + rounds[round][position][3] + "</h2>" + rounds[round][3]);
      $( "#real-alert" ).show();
      realChosen += 1;
    }
  });

  $( ".alert .close").click(function() {
    $( ".alert-content" ).html("");
    $( "#alert-container" ).hide();
    $( this ).parent().parent().hide();
    nextRound();
  })

  function nextRound() {
    round += 1;
    position = 0;
    showCorrectButtons();
    $( "#option-1").show();
    $( "#option-2").hide();
    $( "#option-3").hide();
    optionTexts = $( ".option-content" );
    for (var i = 0; i < 3; i++) {
      $( optionTexts[i] ).remove();
    }
    if (round != totalRounds){
      nextOptions();
    } else {
      endGame()
    }
  }

  function endGame() {
    $( "#end-alert" ).show();
    $( "#end-alert" ).append("<p>You Guessed " + scamsChosen + " of " + totalRounds + " scams correctly!</p>");
  }

});
