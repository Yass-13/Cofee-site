// PROGRESSION BAR

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// TOP SITE BUTTON
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  })
})