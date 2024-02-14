function toggleMenu() {
    var navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
}


// image gallery
function showPopup(text) {
    var popupText = document.getElementById('popup-text');
    popupText.textContent = text;
    var popup = document.getElementById('image-popup');
    popup.style.display = 'block';
    popup.style.left = '50%'; // Center horizontally
    popup.style.top = '50%'; // Center vertically
    popup.style.transform = 'translate(-50%, -50%)'; // Center the popup
  }
  
  function closePopup() {
    var popup = document.getElementById('image-popup');
    popup.style.display = 'none';
  }

  function startQuiz() {
    window.open("valentine_quiz.html", "_blank");
  } 
  
  
  