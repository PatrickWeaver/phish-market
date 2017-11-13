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
        "Hi all! We're excited to invite interested folks from the Hive NYC community to the next CS-Paths Working Group session. This month, we’ll be hearing from the CS-Path project’s three design partners about the pathway building and brokering tools they’re developing, how iterations of their designs have unfolded, and early data and emergent lessons from design research cycles.", "round3option0.png", "real"

      ],
      [
        "Hi Patrick, In 2 weeks from now we'll be joined by industry thought leaders from Centene, Amway and HM Health Solutions for an insightful webinar discussion on how to leverage L&D along with digital solutions to overcome the challenges imposed by the ongoing changes in the marketplace. Save your complimentary spot and join us on Thursday, April 6th at 2pm EDT as our panelists explore: industry trends in a rapidly changing worlds, ultural and strategic alignment to achieve organizational objective, technology to simplify learning, continuous performance improvements . We know you have a busy schedule. Register even if you can't attend and I'll make sure you receive a copy of the recording post-webinar.", "round3option1.png", "scam"

      ],
      [
        "Welcome to Linode! Please confirm your email address. You're almost there! Please click the link below to create your Linode Manager account. Confirm my email and create my account! » Here are a few things to help you get started: Linode Docs - Getting Started Linode Docs - Beginner's Guide Join us via webchat or via #linode on irc.oftc.net For site migrations, server installs, one-off sysadmin tasks and nearly anything else you need, check out our Professional Services team.", "round3option2.png", "real"
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
