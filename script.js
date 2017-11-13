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
