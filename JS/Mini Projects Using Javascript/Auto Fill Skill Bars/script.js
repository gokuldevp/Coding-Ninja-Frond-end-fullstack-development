var scrollLinks = document.querySelectorAll('nav a');


for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    var targetId = event.currentTarget.getAttribute("href").slice(1);
    var targetPosition = document.getElementById(targetId).offsetTop;
    var startPosition = 0;

    var scrollId = setInterval(function() {
        window.scrollTo(0, startPosition += 5);
        
        if (targetPosition <= startPosition) {
            clearInterval(scrollId);
        }
    }, 1);
}


// Function to animate the skills progress bars
function animateSkills() {
    var skillBars = document.querySelectorAll('.skill-progress div');
    const class_name = {
      "ten": 10,
      "twenty": 20,
      "thirty": 30,
      "forty": 40,
      "fifty": 50,
      "sixty": 60,
      "seventy": 70,
      "eighty": 80,
      "ninety": 90,
      "hundred": 100
    };
  
    skillBars.forEach(bar => {
      let desiredWidth = class_name[bar.className.split('-')[0]];
      let width = 0;
  
      const interval = setInterval(() => {
        if (width >= desiredWidth) {
          clearInterval(interval);
        } else {
          width++;
          bar.style.width = `${width}%`;
        }
      }, 10); // Adjust the animation speed if needed
    });
  }
  
  // Create an intersection observer instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Observe the skills section
  observer.observe(document.getElementById('skills'));
  
  
