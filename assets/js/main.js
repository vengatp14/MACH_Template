document.addEventListener('DOMContentLoaded', function() {
    // Get the reference to the color-changing div
    var colorChangingDiv = document.getElementById('colorChangingDiv');
  
    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
      // Get the scroll position
      var scrollPosition = window.scrollY;
  
      // Check if the scroll position is greater than 300 pixels
      if (scrollPosition > 100) {
        colorChangingDiv.style.backgroundColor = '#0081b5';
        colorChangingDiv.style.color = 'white'; // Change text color to white
      } else {
        colorChangingDiv.style.backgroundColor = '#252f4a00';
        colorChangingDiv.style.color = 'white'; // Change text color to black
      }
    });
  });