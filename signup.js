function setRegistrationFocus() {
    // Give the full name text box focus
    document.getElementById('name-box').focus();
}

function enterRegistration() {
    // Hide the currently visibile interface
    var landingButtons = document.querySelectorAll('.btn.land');
    for (var i = 0; i < landingButtons.length; i++) {
        TweenLite.to(landingButtons[i], 0.2, {opacity:0,width:'310px'});
        TweenLite.to(landingButtons[i], 0, {visibility:'hidden',delay:0.2});
    }

    // Reveal the registration interface
    // The text boxes
    var textBoxes = document.querySelectorAll('.textbox.reg');
    for (var i = 0; i < textBoxes.length; i++) {
        textBoxes[i].style.visibility = 'visible';
        TweenLite.to(textBoxes[i], 0.2, {opacity:1,width:'310px',onComplete:setRegistrationFocus});
    }
    // The buttons
    var regButtons = document.querySelectorAll('.btn.reg');
    for (var i = 0; i < regButtons.length; i++) {
        regButtons[i].style.visibility = 'visible';
        TweenLite.to(regButtons[i], 0.2, {opacity:1,marginTop:'15px',delay:0.2});
    }
}

function leaveRegistration() {
    // Hide the registration interface
    // The text boxes
    var textBoxes = document.querySelectorAll('.textbox.reg');
    for (var i = 0; i < textBoxes.length; i++) {
        TweenLite.to(textBoxes[i], 0.2, {opacity:0,width:'150px'});
        TweenLite.to(textBoxes[i], 0, {visibility:'hidden',delay:0.2});
    }
    // The buttons
    var regButtons = document.querySelectorAll('.btn.reg');
    for (var i = 0; i < regButtons.length; i++) {
        TweenLite.to(regButtons[i], 0.1, {opacity:0});
        TweenLite.to(regButtons[i], 0, {visibility:'hidden',marginTop:'50px',delay:0.2});
    }

    // Reveal the landing interface
    var landingButtons = document.querySelectorAll('.btn.land');
    for (var i = 0; i < landingButtons.length; i++) {
        landingButtons[i].style.visibility = 'visible';
        TweenLite.to(landingButtons[i], 0.2, {opacity:1,width:'150px'});
    }
}
