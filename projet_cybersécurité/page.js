function Formulaire() {
  document.getElementById("formulaire").style.display = "block";
}
function CFormulaire() {
  document.getElementById("formulaire").style.display = "none";
}
function affiche(checkbox){
  const p = checkbox.nextElementSibling;
  if (checkbox.checked) {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}
function affichage() {
  if(document.getElementById("question").style.display === "none")
  {
      document.getElementById("question").style.display = "block";
  }
  else
  {
      document.getElementById("question").style.display = "none";
  }
}
document.addEventListener("mousedown", function(event) {
  const formulaire = document.getElementById("formulaire");
  const bouton = document.getElementById("bouton");
  if (formulaire.style.display === "block") {
    if (!formulaire.contains(event.target) && event.target !== bouton) {
      formulaire.style.display = "none";
    }
  }
});