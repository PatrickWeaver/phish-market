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
      ],
      [["URL Shortener instead of real URL", "A URL shortener can be useful to share a long web address, but it can also mask a long suspicious URL."]]
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

  $( "#right-button" ).click(function() {
    if (!transition){
      transition = true;
      var optionsWidth = $(window).width()
      if (position > -2){
        var hideSlide = $( "#option-" + (position + 1) );
        hideSlide.hide("slide", {direction: "left"}, slideDelay, function() {
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
        hideSlide.hide("slide", {direction: "right"}, slideDelay, function() {
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
    var correct = ["Great job! Option ", " was the scam!"];
    var incorrect = ["Oops! The scam was option ", "."];
    var alertHeader;
    var r = rounds[round];
    if (r[position][2] === "scam") {
      alertHeader = correct[0] + (position + 1) + correct[1];
      scamsChosen += 1;
    } else {
      alertHeader = incorrect[0] + (position + 1) + incorrect[1];
      realChosen += 1;
    }
    var explanationContent = "<h3>Some reasons why option " + (position + 1) + " is more likely to be a scam are:</h3><ul>";
    for (var i in r[3]) {
      var reason = r[3][i];
      explanationContent += "<li><strong>" + reason[0] + ":</strong> " + reason[1] + "</li>";
    }
    $( ".alert-content").html("<h2>" + alertHeader + "</h2>" + explanationContent);
    $( "#scam-alert" ).show();
    $( "#alert-container" ).show();
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
