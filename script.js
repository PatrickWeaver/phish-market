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
    var optionsWidth = $(window).width()
    if (position > -2){
      var cardWidth = optionsWidth + 4;
      var currentLeftVal = $( "#option-boxes-container" ).css("left");
      var currentLeft = parseInt(currentLeftVal.substring(0, currentLeftVal.length - 2));
      $( "#option-boxes-container" ).animate({left: (currentLeft - cardWidth).toString() + "px" }, 1000, function() {
        position += 1;
        showCorrectButtons();
      });
    }
  });

  $( "#left-button" ).click(function() {
    var optionsWidth = $(window).width()
    if (position > 0){
      var cardWidth = optionsWidth + 4;
      var currentLeftVal = $( "#option-boxes-container" ).css("left");
      var currentLeft = parseInt(currentLeftVal.substring(0, currentLeftVal.length - 2));
      $( "#option-boxes-container" ).animate({left: (currentLeft + cardWidth).toString() + "px" }, 1000, function() {
        position -= 1;
        showCorrectButtons();
      });
    }
  });

  function showCorrectButtons() {
    if (position === 1) {
      $( "#right-button").show();
      $( "#left-button" ).show();
    }
    if (position === 0) {
      $( "#left-button" ).hide();
    }
    if (position === 2) {
      $( "#right-button" ).hide();
    }
  }


  $( ".option-box").click(function() {
    for (var o in options) {
      if (this === options[o]){
        if (rounds[round][o][2] === "scam"){
          $( "#scam-alert" ).show();
          scamsChosen += 1;
        } else {
          $( "#real-alert" ).show();
          realChosen += 1;
        };
      }
    }
  })

  $( ".alert .close").click(function() {
    $( this ).parent().parent().hide();
    nextRound();
  })

  function nextRound() {
    round += 1;
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
