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
      [
        [
          "URL Shortener instead of real URL",
          "A URL shortener can be useful to share a long web address, but it can also mask a long suspicious URL."
        ],
        [
          "Offers you money for nothing",
          "Whenever people offer easy money online it's often too good to be true."
        ]
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
      ],
      [
        [
          "Email Domain",
          "The real emails from Facebook are from the domain '@facebookmail.com', but the scam email is from 'facebook.security-details-facebook.com'. Scam websites sometimes use a subdomain to make it look like they have a different URL."
        ],
        [
          "Asks you to provide your password",
          "Websites that you sign up for already have your password and won't ask you to confirm it in an email. The real email from Facebook gives you a security code to give to them. This allows you to confirm your identity without requiring your password."
        ]
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
      ],
      [
        [
          "Long URL with a confusing subdomain",
          "Sometimes using a familiar subdomain can make a URL look more legitimate than it is."
        ],
        [
          "Promises you secret information",
          "Scams might try to lure you in with interesting information about you or someone else. It's a good idea to think about whether it's possible for them to know what they are offering before going further."
        ]
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

  $( ".option-nav").click(function() {
    var id = $(this).attr("id");
    if (!transition) {
      transition = true;
      slideOption(id);
    }
  });

  function slideOption(id) {
    var allowed = false;
    var direction;
    var move;
    if (id === "right-button") {
      if (position < 2) {
        allowed = true;
        direction = "left";
        slide = "right";
        move = 1;
      }
    } else {
      if (position > 0) {
        allowed = true;

        direction = "right";
        slide = "left";
        move = -1;
      }
    }
    if (allowed){
      var hideSlide = $( "#option-" + (position + 1) );
      hideSlide.hide("slide", {direction: direction}, slideDelay, function() {
      });
      $( "#option-" + (position + (1 + move)) ).show("slide", {direction: slide}, slideDelay, function() {
        position += move;
        showCorrectButtons();
        transition = false;
      });
    }
  }

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
    var explanationContent = "<h3>Some reasons why option " + (correctChoice + 1) + " is more likely to be a scam are:</h3><ul>";
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
    timesClosed += 1;
    alert(timesClosed);
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
    alert("end");
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
      endGame();
    }
  }

  function endGame() {
    $( "#alert-container" ).show();
    $( "#end-alert" ).show();
    $( "#end-content" ).append("<p class='end-text'>You Guessed " + scamsChosen + " of " + totalRounds + " scams correctly.</p>");
  }

  $( "#restart").click(function() {
    round = 0;
    realChosen = 0;
    scamsChosen = 0;
    position = 0;
    $( "#alert-container" ).hide();
    $( "#end-alert" ).hide();
    $( "#start-button-container" ).show();
    $( "#game" ).hide();
    $( "body" ).css("background-image", "url('images/phishmarket.svg')");
    $( "#end-content" ).html("");
    $( "#start-container" ).show();
  });

});
