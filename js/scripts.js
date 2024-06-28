console.log("Hi, welcome to my site!")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle' && $(window).width() < 640) {
  x.className += ' responsive';
  } else {
  x.className = 'navtoggle';
  }
  }