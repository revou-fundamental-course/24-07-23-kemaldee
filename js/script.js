let currentSlide = 0;
const slides = document.querySelectorAll('.image1');

function showSlide() {
  slides.forEach((slide) => (slide.style.display = 'none'));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
  setTimeout(showSlide, 5000); 
}

showSlide();


function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const option = document.getElementById('option').value;

  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (option === '') {
    alert('Please select an option.');
    return false;
  }

  return true;
}
