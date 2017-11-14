$(document).ready(function(){

  var rounds = [
    [
      [
        "", "twitter1.png", "scam"
      ],
      [
        "", "twitter2.png", "real"
      ],
      [
        "", "twitter3.png", "real"
      ]
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
      if (rounds[round][i][0] != ""){
        addContent += rounds[round][i][0] + "<br><br>";
      }
      addContent += "<img class='option-image' src='images/" + rounds[round][i][1] + "'></div>";
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
        /*
        $( "#option-" + (position + 1) ).hide("slide", {direction: "left"}, 500, function() {
          $( "#option-" + (position + 2) ).show("slide", {direction: "right"}, 500, function() {
            position += 1;
            showCorrectButtons();
            transition = false;
          });
        });
        */
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


  $( ".option-box").click(function() {
    for (var o in options) {
      if (this === options[o]){
        if (rounds[round][o][2] === "scam"){
          $( "#scam-alert" ).show();
          scamsChosen += 1;
          break;
        } else {
          $( "#real-alert" ).show();
          realChosen += 1;
          break;
        };
      }
    }
  });

  $( ".alert .close").click(function() {
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
