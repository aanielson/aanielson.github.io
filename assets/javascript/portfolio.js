window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrolltop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navlinks").style.height = "50px";
    document.getElementById("navlinks").style.backgroundColor = "rgb(242, 174, 2)";
  } else {
    document.getElementById("navlinks").style.backgroundColor = "transparent";
  }
}