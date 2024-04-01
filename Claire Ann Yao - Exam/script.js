const openPopupBtn = document.querySelector('.open-terms');
const terms = document.getElementById('terms');
const closePopupBtn = document.querySelector('.close-terms');

openPopupBtn.addEventListener('click', () => {
  terms.classList.add('visible');
});

closePopupBtn.addEventListener('click', () => {
  terms.classList.remove('visible');
});

const expandableLinks = document.querySelectorAll('.expandable-link');

expandableLinks.forEach(link => {
  link.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
});



$(document).ready(function() {
  $("#email").blur(function() {
    var email = $(this).val();
    validateEmail(email);
  });

  function validateEmail(email) {
    $.ajax({
      url: "validate_email.php", // Replace with your actual script path
      method: "POST",
      data: { email: email },
      dataType: "json",
      success: function(response) {
        var messageSpan = $("#email-message");
        messageSpan.text(response.message);
        if (response.error) {
          messageSpan.css("color", "red");
        } else {
          messageSpan.css("color", "green");
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error:", textStatus, errorThrown);
      }
    });
  }
});