// Scroll to Top feature
function topScroll(){
  window.scrollTo({top:0, behavior: "smooth"});
}





//Section Zoom feature
const sections = document.getElementsByClassName("card");

const growScale = 0.8;

console.log(sections);

function sectionGrow(x) {
  const sectionBox = x.target;
  sectionBox.style.transition = "transform 0.3s ease";
  sectionBox.style.transform = "scale(${growScale})";
}
function sectionShrink(x) {
  const sectionBox = x.target;
  sectionBox.style.transition = "transform 0.3s ease";
  sectionBox.style.transform = "scale(1)";
}

for(let card of sections){
  card.addEventListener("mouseover",sectionGrow);
  card.addEventListener("mouseout",sectionShrink);
}
const pImg = document.getElementById("principal");
pImg.addEventListener("click", function() {
  pImg.classList.toggle("img-rounded-border");
})


const pimg = document.querySelector("img");
console.log(pimg);
pimg.addEventListener("mouseover",sectionGrow);








// Navigation bar Updates
function openlink(evt, linkName) {
  // Declare all variables
  var i, tabcontent,  tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTab");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}

