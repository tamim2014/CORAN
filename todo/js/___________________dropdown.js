// AFFICHE/CACHER LES REPONSES
	
var dropdown = document.getElementsByClassName("question");

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  
  //var dropdownContent = document.getElementsByClassName("reponse");
  var dropdownContent = this.nextElementSibling; // si le this est un <span> ça ne marche pas i fo le remplace par un <p>
		 
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  
  });
}
	
	