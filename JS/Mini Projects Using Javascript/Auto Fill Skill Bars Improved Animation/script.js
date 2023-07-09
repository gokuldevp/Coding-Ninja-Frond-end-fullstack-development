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
  

  
  
var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            animateSkills();
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);
