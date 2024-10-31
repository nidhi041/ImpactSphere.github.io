// script.js

// Function to duplicate the content for smooth looping
function duplicateMarqueeContent() {
    const marqueeContent = document.getElementById("marqueeContent");
    // Duplicate the content so it scrolls seamlessly
    const duplicateContent = marqueeContent.innerHTML;
    marqueeContent.innerHTML += duplicateContent;
  }
  
  // Function to initialize the scroll animation
  function initMarquee() {
    const marqueeContent = document.getElementById("marqueeContent");
  
    // Set the animation dynamically based on the content width
    const contentWidth = marqueeContent.scrollWidth;
    marqueeContent.style.animation = `scroll ${contentWidth / 100}s linear infinite`;
  }
  
  // Initialize on page load
  window.onload = function() {
    duplicateMarqueeContent();
    initMarquee();
  };
  