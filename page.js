let produits = ["crème hydratante","serum anti-âge","Masque purifiant","rouge à lèvre","mascara","crème solaire","parfum", "lait corporel", "gel douche", "shampoing", "après-shampoing", "masque capillaire", "huile essentielle", "savon artisanal"];
function Formulaire() {
  document.getElementById("formulaire").style.display = "block";
}
function CFormulaire() {
  document.getElementById("formulaire").style.display = "none";
}
function creerCheckboxes() {
  const conteneur = document.querySelector(".selection_produit");
  for( let produit of produits){
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = produit;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + produit));
    const p = document.createElement("p");
    p.style.display ="none";
    p.innerHTML = `Quantité: <label><input type="number" min="1"></label><br>`;
    conteneur.appendChild(label);
    conteneur.appendChild(p);
    checkbox.addEventListener("change", function() {
      affiche(checkbox);
    });
  }
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
creerCheckboxes();
