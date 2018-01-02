$(document).ready(function(){

  var rounds = [
    [
      [
        "Tweet from John Anderson (@JohnAnd32): Have you heard about the newest way to save $10 a month? bit.ly/2AGnt0L -- 9:08 AM - 13 Nov 2017", "twitter1.png", "scam"
      ],
      [
        "Tweet from Renee Arroyo (@reneearro_yo): Check out my tumblr! Link Preview: Tumblr reneearroyo 4.0/5.0 stars - 349, 930 ratings -- 9:18 AM - 13 Nov 2017", "twitter2.png", "real"
      ],
      [
        "Tweet from Sticker Zebra (@sticker_zebra): We are inspired by Bill Gates! 5% of all orders this week go to Alzheimer's research. Read more form Bill here: b-gat.es/2yX1O7g [Quoted Tweet from Bill Gates (Verified @BillGates): I believe that we can alter the course of Alzheimer's. That's why I'm investing in the Dementia Discovery Fund. b-gat.es/2yX1O7g] -- 9:24 AM - 13 Nov 2017", "twitter3.png", "real"
      ],
      [
        [
          "URL Shortener instead of real URL",
          "A URL shortener can be useful to share a long web address, but it can also mask a long suspicious URL. However, real information is also shared via links using URL shorteners like in the quoted Bill Gates tweet. It's a good idea to only follow links from people or URLs you trust."
        ],
        [
          "Offers you money for nothing",
          "Whenever people offer easy money online it's often too good to be true."
        ]
      ]
    ],
    [
      [
        "Email from Facebook (security@facebook.com) at 1:33 PM. Subject: [175203 is your Facebook account recovery code.] Facebook Logo -- Hi Mo, We received a request to reset your Facebook password. (Link) Click here to change your password. (End Link) Alternatively, you can enter the following password reset code: [175203] Didn't request this change? If you didn't request a new passowrd, let us know. (Button) Change Password (End Button) ---- This message was sent to mouseofficefridge@gmail.com at your request. Facebook Inc., Attention: Community Support, 1 Hacker Way, Menlo Park, CA 94025", "facebook1.png", "real"

      ],
      [
        "Email from Facebook (notification+kjdv7-ikk51m@facebookmail.com) on Jul 24. Subject: [Help your friends recognize you] Facebook Logo -- Add a Profile Picture -- Hi Mo, This is what your friends see when htey visit your provile or when you post or comment on Facebook. Add a profile picture so your friends know it's you. (Button) Add Profile Picture (End Button) --- This message was sent to mouseofficefridge@gmail.com. If you don't want to receive these emails from Facebook in the future, please (Link) Unsubscribe (End Link).  Facebook Inc., Attention: Community Support, 1 Hacker Way, Menlo Park, CA 94025", "facebook2.png", "real"

      ],
      [
        "Email from Facebook (security@facebook.security-details-facebook.com) on Oct 16. Subject: [IMPORTANT: Did you just log in to Facebook from a new location?] Facebook Logo -- Hi, We see that you just logged in to Facebook from a new location. To protect your security please confirm your Facebook password by entering it at the link below. -- New Login: Greenton, NY -- 192.168.1.1 -- (Link) Click here to confirm your password. (End Link) -- . -- (Button) Confirm Password (End Button) --- This message was sent to mouseofficefridge@gmail.com at your request. Facebook Inc., Attention: Community Support, 1 Hacker Way, Menlo Park, CA 94025", "facebook3.png", "scam"
      ],
      [
        [
          "Email Domain",
          "The real emails from Facebook are from the domain '@facebookmail.com', but the scam email is from 'facebook.security-details-facebook.com'. Scam websites sometimes use a subdomain to make it look like they have a different URL. The real domain of this website is security-details-facebook.com, not facebook.com"
        ],
        [
          "Asks you to provide your password",
          "Websites that you sign up for already have your password and won't ask you to confirm it in an email. The real email from Facebook gives you a security code to give to them. This allows you to confirm your identity without requiring your password."
        ]
      ]

    ],
    [
      [
        "Instagram Message from @creativedesigns64: Today 2:56 PM -- Avatar is a picture of a building -- Hey, nice profile! I just found this site that helps you find people who would want to follow you, check it out! http://insta-followers.social-trends-details.com -- (Input Box) Write a message . . . (End Input Box)", "instagram1.png", "scam"

      ],
      [
        "Instagram Message from @getfilterapp: Today 3:11 PM -- Avatar is a camera icon and the words 'Filter App' -- I like your pictures! Ever had a hard time finding the *perfect* Instagram filter? Check out our app for photo and video filters! -- iOS: https://itunes.apple.com/us/app/filter-app/id79262343219118 -- Android: https://play.google.com/store/apps/details?id=com.filterapp.android --  (Input Box) Write a message . . . (End Input Box)", "instagram2.png", "real"

      ],
      [
        "Instagram Message from @vlogvip: Today 3:30 PM -- Avatar is a picture of a camera flash -- Thanks for the follow! Like us on FB https://www.facebook.com/Vlog-VIP-Productions-723901374472522/ --  (Input Box) Write a message . . . (End Input Box)", "instagram3.png", "real"
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
      addContent += "<div  class='option-image'><img src='images/" + rounds[round][i][1] + "' alt='" + rounds[round][i][0] + "'></div></div>";
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
    $( "#end-content" ).append("<p class='end-text'>You Guessed " + scamsChosen + " of " + totalRounds + " scams correctly.</p>");
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
    $( "body" ).css("background-image", "url('images/phishmarket.svg')");
    $( "#end-content" ).html("");
    $( "#start-container" ).show();
  });

});
