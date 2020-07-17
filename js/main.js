const quizSession = {
  score : 0,
  progress: -1,
  questions: [
        "Do you spend 2 days a week on strength training?",
        "Do you regularly get at least 8 hours of sleep a night?",
        "Do you eat a well-balanced diet, limiting sugars and unhealthy fats?",
        "Do you take medications as prescribed?",
        "Do you limit alcohol consumption and avoid illegal substances?",
        "Do you have a creative outlet or hobbies?",
        "Do you take time to write in a journal?",
        "Do you allow yourself to experience and express the full range of your emotions?",
        "Do you practice gratitude?",
        "Do you have your own set of tools that allow you to relax and ground yourself after a stressful day?",
        "Do you connect regularly with people who are positive and supportive of your goals?",
        "Do you give yourself permission to be vulnerable with other trusted members of your social circle?",
        "Do you engage yourself in the service to others in your community?",
        "Do you allow yourself to ask for help when you have a need?",
        "Do you have healthy boundaries for yourself and communicate them clearly to others?",
        "Do you take time to practice spirituality or connect to a higher purpose beyond your own personal goals?",
        "Do you practice mindfulness, prayer or another similar spiritual practice?",
        "Do you know what the most important values you have are and do you use these to guide your decisions?",
        "Do you have a strong sense of your purpose and find meaning in your existence?",
        "Do you take time to set goals and follow through on your plans?",
        "Are you able to maintain focus while completing mundane tasks?",
        "Do you drink at least 64 ounces of water a day?",
        "Do you have a positive self-image?",
        "Are you generally kind to yourself when you are having a difficulty or make a mistake?"
    ],
  reset: function() {
    quizSession.score = 0;
    quizSession.progress = -1;
  }
}

$.fn.multiline = function(text){
  // Change \n into line breaks when using jquery text function
  this.text(text);
  this.html(this.html().replace(/\n/g,'<br/>'));
  return this;
}

function removeResponseClasses (index, classNames) {
  var current_classes = classNames.split(" "), // change the list into an array
      classes_to_remove = []; // array of classes which are to be removed

  $.each(current_classes, function (index, class_name) {
    // if the classname begins with bg add it to the classes_to_remove array
    if (/response.*/.test(class_name)) {
      classes_to_remove.push(class_name);
    }
  });
  // turn the array back into a string
  return classes_to_remove.join(" ");
}

$.empty_field_validation = function(field_value) {
  if (field_value.trim() == '') return false;
  return true;
}
  
$.email_validation = function(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$.phone_number_validation = function(phone) {
  var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
}

function scrollToArea (section) {
  $("html, body").animate({
      scrollTop: ($(section).offset().top - 70),
  }, 1000);
}


$(function() {
  // Hamburger Menu
  const $hamburger = $(".hamburger");
  const $navbar = $(".navbar");
  $hamburger.on("click", () => {
    $hamburger.toggleClass("is-active");
    $navbar.toggleClass("burger-open")
  });
  // Navigation Scrolling
  $("nav").find(".navbar--link").click(function(e) {
    e.preventDefault();
    scrollToArea($(this).children().attr("href"));
  });
  $(".hero-button").on("click", (e) => {
    e.preventDefault();
    scrollToArea('#about-us');
  });
  $(".ghost-button").on("click", (e) => {
    e.preventDefault();
    scrollToArea('#contact-us');
  });
  $(".double-up").on("click", (e) => {
    e.preventDefault();
    scrollToArea('#hero-top');
  });
  // Nav buttons highlight based on page position
  var $contactUsSection = $("#contact-us")
  var $navContactUs = $('#nav-contact')
  var $faqSection = $("#frequently-asked-questions")
  var $navFaq = $('#nav-faq')
  var $packageSection = $("#package-options")
  var $navPackage = $('#nav-package')
  var $selfCareSection = $("#self-care")
  var $navSelfCare = $('#nav-self-care')
  var $aboutUsSection = $("#about-us")
  var $navAboutUs = $('#nav-about-us')
  var $navHome = $('#nav-intro')
  $(window).on( "scroll", () => {
    if ( $(window).scrollTop() >= ($contactUsSection.offset().top - 70 )) {
      $navContactUs.addClass("active");
      $navFaq.removeClass("active");
      return
  }
    if ( $(window).scrollTop() >= ($faqSection.offset().top - 70 )) {
        $navFaq.addClass("active");
        $navPackage.removeClass("active");
        $navContactUs.removeClass("active");
        return
    }
    if ( $(window).scrollTop() >= ($packageSection.offset().top - 70)) {
        $navPackage.addClass("active");
        $navSelfCare.removeClass("active")
        $navFaq.removeClass("active");
        return
    }
    if ( $(window).scrollTop() >= ($selfCareSection.offset().top - 70)) {
        $navSelfCare.addClass("active");
        $navAboutUs.removeClass("active");
        $navPackage.removeClass("active");
        return
    }
    if ( $(window).scrollTop() >= ($aboutUsSection.offset().top - 70)) {
        $navAboutUs.addClass("active");
        $navHome.removeClass("active");
        $navSelfCare.removeClass("active")
        return
    }
    $navHome.addClass("active");
    $navAboutUs.removeClass("active");
  });
  // Self Care Widget
 const $selfCareCirclesContainer = $(".reactive-icons-wrapper");
 const $selfCareReactionCircle = $("#self-care-result-circle");
 const $selfCareReactionTitle = $("#self-care-explanation-title");
 const $selfCareReactionExplanation = $('#self-care-explanation');
 $selfCareCirclesContainer.on("click", (event) => {
    var elementClicked = event.target;
    var responseCircleId = elementClicked.dataset.circleid;
    if (responseCircleId) {
      $selfCareCirclesContainer.children().each(function (index) {
        this.classList.remove("activeCircle")
      })
      elementClicked.classList.add("activeCircle");
    }
    switch (responseCircleId) {
      case '1':
        $selfCareReactionCircle.removeClass(removeResponseClasses);
        $selfCareReactionCircle.addClass('response1');
        $selfCareReactionTitle.text("Emotional");
        $selfCareReactionExplanation.text("To feel whole and complete, it is important that we can experience a wide range of emotions. It is not uncommon for people to deny, ignore or suppress some of the less positive emotions. These less than ideal coping strategies can lead to poor sleep quality, diminished concentration, increased stress, health problems, anxiety and depression. Increased awareness of your attachment needs, carving out space for relaxation and reflection, and engaging in creative activities will fortify your emotional health. Consider ways that you can increase your emotional awareness.")
        break;
      case '2':
        $selfCareReactionCircle.removeClass(removeResponseClasses); 
        $selfCareReactionCircle.addClass('response2');
        $selfCareReactionTitle.text("Social");
        $selfCareReactionExplanation.text("Neurofeedback works at a physiological level to improve brain function making it easier to regulate our emotions and be more emotionally resilient.  Scientific evidence and current research support the idea that human beings are hard wired for connection. Innate in each of us are deep attachment longings such as knowing that you are lovable and acceptable.  As human beings, we long to know that we matter to someone and that we have purpose. To truly connect with another person is a courageous action requiring vulnerability and healthy boundaries. There are many opportunities to experience the resilience that comes from connection.")
        break;
      case '3': 
        $selfCareReactionCircle.removeClass(removeResponseClasses);
        $selfCareReactionCircle.addClass('response3');
        $selfCareReactionTitle.text("Intellectual");
        $selfCareReactionExplanation.text("Your thoughts are an integral part of who you are and they directly impact your emotions and sense of self. Practicing mindfulness, an awareness of what you are thinking, feeling and experiencing in your body in the present moment, without judgement is a powerful practice. It takes time to master and intentional effort. Without this ability, it is difficult to redirect negative self-talk to positive self-talk, engage in proactive versus reactive behavior or to separate ourselves from the judgements, labels and actions of others. Neurofeedback helps our brain find balance making it easier to practice mindfulness and self-compassion, to stay focused, to set goals, and live our life mission purposefully.")
        break;
      case '4': 
        $selfCareReactionCircle.removeClass(removeResponseClasses);
        $selfCareReactionCircle.addClass('response4');
        $selfCareReactionTitle.text("Physical");
        $selfCareReactionExplanation.text("It is important for your health to maintain a balanced, nutritious diet, get plenty of water, exercise regularly and avoid harmful substances. If we ignore our physical needs, we risk injury, high blood pressure, heart disease, stroke, mental health problems, unemployment, and even death. Start taking care of your physical needs today by setting goals to address any problem areas.")
        break;
      case '5': 
        $selfCareReactionCircle.removeClass(removeResponseClasses);
        $selfCareReactionCircle.addClass('response5');
        $selfCareReactionTitle.text("Spiritual");
        $selfCareReactionExplanation.text("In the world we live in today, there are so many distractions, stressors and opportunities for information overload. It is easy to become overwhelmed, confused or lost in the myriad of to dos. For complete, balanced health it is important to find purpose and meaning for our existence. Identifying your core values and knowing what centers you, will serve as a compass and an anchor. Many people practice spirituality by exercising faith through prayer, practicing mindfulness, through meditation or connecting to a cause or purpose beyond themselves.")
        break;
      default: 
        return
    }
 })
  //  Self Care Quiz
  const $quizAnswers = $(".quiz-answers");
  const $quizQuestion = $(".quiz-question");
  $quizAnswers.on("click", (event) => {
  var elementClicked = event.target;
  var answerButtonId = elementClicked.dataset.quizanswerid;
  if (answerButtonId) {
    quizSession.progress += 1;
    quizSession.score += (parseInt(answerButtonId) - 1)
    if (quizSession.progress <= 23) {
      $quizQuestion.text(quizSession.questions[quizSession.progress]);
      } else {
        if (quizSession.score <= 19) {
          var resultMessage = "\n\n A score in this range suggests there are some deficits in your overall self-care. The good news is that there are areas that you can improve. Review the 5 categories of self-care and set goals that will create a more balanced routine.  If you are looking for help. we offer a two day a week program package that includes one 45 minute neurofeedback session plus mindfulness practice and self-care tools and one 45 minute therapy session for targeting obstacles."
        } else if (quizSession.score <= 29) {
          var resultMessage = "\n\n A score in this range indicates there are areas where you can improve your self-care.  Often people may have been taught to feel guilty about taking time for themselves. Taking time to address physical, emotional, spiritual, intellectual and social needs is imperative to your overall health.  Consider reviewing these questions again and make some goals to address areas that you may have been neglecting.  Participating in our self-care program will help guide you through the process of creating a complete self-care routine."
        } else if (quizSession.score <= 39) {
          var resultMessage = "\n\n A score in this range indicates your self-care is somewhat complete.  There are areas where you may increase or add to your self-care routine.  Review the questions and determine if you would like to set goals to grow your self-care.  Adding Neurofeedback can help improve your intellectual and emotional self-care -- our self-care package would be the perfect place to start."
        } else {
          var resultMessage = "\n\n A score in this range signifies you have established some excellent self-care strategies! Consider adding Nuerofeedback sessions to enhance your intellectual and emotional self-Care. Treat yourself to brain training today."
        }
        $quizQuestion.multiline("Quiz Complete! Your score is: " + quizSession.score + resultMessage);
        $quizAnswers.hide();
        $(".quiz-questions").css("marginTop", "2em");
      }
    }
  })
  // Contact Form
  const $errorContainer = $(".error-wrapper")
  const $errorMessage = $("#error-message");
  const $contactNameField = $("#contact-name");
  const $contactNumberField = $("#contact-number");
  const $contactEmailField = $("#contact-email");
  const $contactAvailabilityField = $("#contact-availability");
  const $contactPackageField = $("#contact-package");
  $('#contact-form-bottom').submit(function(event) {
    event.preventDefault();
    var contactName = $contactNameField.val();
    if (!$.empty_field_validation(contactName)) {
      $errorMessage.text('Please enter your name.')
      $errorContainer.removeClass('hide');
      return
    }
    var contactNumber = $contactNumberField.val();
    if (!$.empty_field_validation(contactNumber) || !$.phone_number_validation(contactNumber)) {
      $errorMessage.text('Please enter a valid phone number.');
      $errorContainer.removeClass('hide');
      return
    }
    var contactEmail = $contactEmailField.val();
    if (!$.empty_field_validation(contactEmail) || !$.email_validation(contactEmail)) {
      $errorMessage.text('Please enter a valid email address.');
      $errorContainer.removeClass('hide');
      return
    }
    var contactAvailability = $contactAvailabilityField.val();
    if (!$.empty_field_validation(contactAvailability)) {
      $errorMessage.text('Please fill in the availability field.')
      $errorContainer.removeClass('hide');
      return
    }
    contactAvailability = contactAvailability.replace(/"/g,"");
    var contactPackage = $contactPackageField.val();
    $.ajax({
      url: 'contact.php',
      data: {
          json: JSON.stringify({ Name: contactName, Number: contactNumber, Email: contactEmail, Availability: contactAvailability, Package: contactPackage})
      },
      type: 'post',
      success: function() {
        $errorMessage.text('Thank you ' + contactName.split(" ")[0] + ', your message has been sent.')
        $errorContainer.addClass('success');
        $errorContainer.removeClass('hide');
      },
      error: function() {
        $errorMessage.text('Sorry, there was a problem sending your message.')
        $errorContainer.removeClass('hide');
      }
    });
  })
})