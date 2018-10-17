$(document).ready(function(){

  var rounds = [
    [
      [
        "Wrote over 7 autobiographies, 3 books of essays, and several books of poetry.", "maya-1.png", "real"
      ],
      [
        "Never married.", "maya-2.png", "scam"
      ],
      [
        "Formed a dance team called “Al and Rita.”", "maya-3.png", "real"
      ],
      [
      ]
    ],
    [
      [
        "If A is success in life then A equals X plus Y plus Z. Work is X, Y is play, and Z is keeping your mouth shut.", "einstein-1.png", "real"

      ],
      [
        "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", "einstein-2.png", "real"

      ],
      [
        "If I have seen further, it is by standing upon the shoulders of giants", "einstein-3.png", "scam"
      ],
      [
      ]

    ],
    [
      [
        "Justice Sonia Sotomayor", "sotomayor-1.png", "real"

      ],
      [
        "Justice Sonia Sotomayor", "sotomayor-2.png", "scam"

      ],
      [
        "Justice Sonia Sotomayor", "sotomayor-3.png", "real"
      ],
      [
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
      addContent += "<div  class='option-image'><img src='../images/" + rounds[round][i][1] + "' alt='" + rounds[round][i][0] + "'></div></div>";
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


  function resetHeaders() {
    $( ".option-box" ).hide();
    $( ".option-header" ).css(
      {
        "border-top": "2px solid #888",
        "border-left": "2px solid #888",
        "border-right": "2px solid #888",
        "background-color": "#DDD",
        "z-index": "40"
      }
    )
  }

  $( ".option-header" ).click(function() {
    resetHeaders();
  });

  var activeCSS =
  {
    "border-top": "2px solid black",
    "border-left": "2px solid black",
    "border-right": "2px solid black",
    "background-color": "#FFF",
    "z-index": "100"
  }

  function option1() {
    position = 0;
    $( "#option-1").show();
    $( "#option-1-header" ).css(activeCSS);
  }

  function option2() {
    position = 1;
    $( "#option-2").show();
    $( "#option-2-header" ).css(activeCSS);
  }

  function option3() {
    position = 2;
    $( "#option-3").show();
    $( "#option-3-header" ).css(activeCSS);
  }

  $( "#option-1-header" ).click(function() {
    option1();
  });

  $( "#option-2-header" ).click(function() {
    option2();
  });

  $( "#option-3-header" ).click(function() {
    option3();
  });


  $( "#scam-button").click(function() {
    $( "#game" ).css("display", "none");
    $( "#game" ).css("position", "fixed");
    var correct = ["Great job! Option ", " was the lie!"];
    var incorrect = ["Oops! The lie was option ", "."];
    var alertHeader;
    var r = rounds[round];

    var correctChoice;
    for (var i = 0; i < 3; i ++) {
      if (r[i][2] === "scam") {
        correctChoice = i;
        break;
      }
    }
    if (position === correctChoice) {
      alertHeader = correct[0] + (correctChoice + 1) + correct[1];
      scamsChosen += 1;
    } else {
      alertHeader = incorrect[0] + (correctChoice + 1) + incorrect[1];
      realChosen += 1;
    }
    var explanationContent = "";
    for (var i in r[3]) {
      var reason = r[3][i];
      explanationContent += "<li><strong>" + reason[0] + ":</strong> " + reason[1] + "</li>";
    }
    $( ".alert-content").html("<h2>" + alertHeader + "</h2>" + explanationContent);
    $( "#scam-alert" ).show();
    $( "#alert-container" ).show();
  });


  var timesClosed = 0;

  $( ".alert .close").click(function() {
    $( "#game" ).css("display", "block");
    $( "#game" ).css("position", "static");
    timesClosed += 1;
    if (timesClosed === 2) {
      $( "#score-game" ).show();
      $( "#next-round" ).hide();
    } else if (timesClosed === 3) {
      $( "#score-game" ).hide();
      $( "#next-round" ).show();
      timesClosed = 0;
    }
    $( ".alert-content" ).html("");
    $( "#alert-container" ).hide();
    $( this ).parent().parent().hide();
    nextRound();
  })

  function nextRound() {
    round += 1;
    resetHeaders();
    option1();
    optionTexts = $( ".option-content" );
    for (var i = 0; i < 3; i++) {
      $( optionTexts[i] ).remove();
    }
    if (round != totalRounds){
      nextOptions();
    } else {
      endGame();
    }
  }

  function endGame() {
    $( "#game" ).css("display", "none");
    $( "#game" ).css("position", "fixed");
    $( "#alert-container" ).show();
    $( "#end-alert" ).show();
    $( "#end-content" ).append("<p class='end-text'>You Guessed " + scamsChosen + " of " + totalRounds + " lies correctly.</p>");
  }

  $( "#restart").click(function() {
    $( "#game" ).css("display", "block");
    $( "#game" ).css("position", "static");
    round = 0;
    realChosen = 0;
    scamsChosen = 0;
    position = 0;
    $( "#alert-container" ).hide();
    $( "#end-alert" ).hide();
    $( "#start-button-container" ).show();
    $( "#game" ).hide();
    $( "body" ).css("background-image", "url('../images/phishmarket.svg')");
    $( "#end-content" ).html("");
    $( "#start-container" ).show();
  });

});
