var navBurger = document.getElementById("navBurger");
var navItems = document.getElementById("navItems");
var page = document.getElementById("page");
var startPage = document.getElementById("startPage");

var x ='';

//navBurger.addEventListener("click", myFunction());

function myFunction(x) {
  navBurger.classList.toggle("change");
  navItems.classList.toggle('showHide');
  startPage.classList.toggle('showHide');
}

function callPage(page) {
Array.from(document.querySelectorAll('.page')).forEach(
  (el) => el.classList.remove('showHide')
);
  current = document.getElementById(page+"Page").classList.toggle('showHide');
  console.log(page);
  if (page =="start" && navItems.classList.contains('showHide') ) {
    myFunction(start);
    startPage.classList.toggle('showHide');
    }
}


