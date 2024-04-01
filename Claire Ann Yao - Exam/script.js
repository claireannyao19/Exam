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


const button = document.getElementById("bet-button");

button.addEventListener("click", function() {
  const email = prompt("Enter your email address:");
  if (email) {
    window.location.href = `http://www.coral.co.uk/register?email=${email}`;
  }
});