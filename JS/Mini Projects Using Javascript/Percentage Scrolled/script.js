function getScrollPercentage() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
  
    var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
    return Math.round(scrollPercentage);
  }
  
  var counter_text = document.getElementById("counter_text");
  
  window.addEventListener("scroll", function() {
    counter_text.textContent = "Percentage: " + getScrollPercentage() + "%";
  });
  