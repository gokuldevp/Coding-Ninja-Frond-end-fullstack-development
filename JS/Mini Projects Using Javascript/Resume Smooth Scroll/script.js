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