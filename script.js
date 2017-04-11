var options = [];
var round1 = [
  [
    "Hello, all of the money you have in the bank, I don't think you want it! Did the money ever say thank you? I don't think so. But me, your new friend, I start our friendship by saying, Thank You! Thank you for sending me the money in the bank. Here is my address: 123 Send St, The Money, NY 10001. Thank you!", "round1option1.png", "scam"
  ],
  [
    "Nonsecure Collection of Passwords will trigger warnings in Chrome 56 forhttp://oatdog.club/\nTo: owner of http://oatdog.club/\nBeginning in January 2017, Chrome (version 56 and later) will mark pages that collect passwords or credit card details as 'Not Secure' unless the pages are served over HTTPS.\n\nThe following URLs include input fields for passwords or credit card details that will trigger the new Chrome warning. Review these examples to see where these warnings will appear, and so you can take action to help protect users’ data. The list is not exhaustive.\n\nhttp://www.oatdog.club/signup\n\nThe new warning is the first stage of a long-term plan to mark all pages served over the non-encrypted HTTP protocol as 'Not Secure'.", "round1option2.png", "real"
  ],
  [
    "A New Technology Learning Lab at Bushwick Library\n\nHave you visited your local library lately? We teamed up with Charter Communications to open the Spectrum Learning Lab at Bushwick Library. The new education and technology center provides state-of-the-art technology, including laptop computers and high-speed internet service, to patrons free of charge.\n\nThe Lab hosts a rotating schedule of programs, including twice-weekly programs for older adults, weekly job readiness workshops and after-school programs. Beginning computer users can take classes to learn basic skills, while Teen Tech Time attendees will learn coding and design skills. Twenty laptop computers, provided by Charter Communications, will be available for in-library loans—that's twice as many as were previously available.", "round1option3.png", "real"
  ]
]


$( "button#start" ).click(function() {
  $( "body" ).css("background-image", "none");
  $( "#start-header" ).hide();
  $( "#start-button-container" ).hide();
  $( "#game" ).show();

  options = $( ".option-box");
  for (var o in options) {
    options[o].append(round1[o][0])
  }
});


$( ".option-box").click(function() {
  console.log(this);
  for (var o in options) {
    if (this === options[o]){
      if (round1[0][2] === "scam"){
        alert("Scam!");
      } else {
        alert("Real!");
      };
    }
  }
})
