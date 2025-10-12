let produits = ["crème hydratante","serum anti-âge","Masque purifiant","rouge à lèvre","mascara","crème solaire","parfum", "lait corporel", "gel douche", "shampoing", "après-shampoing", "masque capillaire", "huile essentielle", "savon artisanal"];
let prix = ["20", "38", "25", "2", "18", "22", "50", "12", "8", "10", "14", "16"];
let variantes_rouge_a_levre = ["raisin","liquide","gloss","crayon"];
let couleur = ["rouge","bleu","marron","rose","noir"];
function Formulaire() {
  document.getElementById("formulaire").style.display = "block";
}
function CFormulaire() {
  document.getElementById("formulaire").style.display = "none";
}
function creerCheckboxes() {
  const conteneur = document.querySelector(".selection_produit");
  for(let produit = 0; produit < produits.length ; produit++){
    const label = document.createElement("label");
    const casse = document.createElement("input");
    casse.type = "checkbox";
    casse.value = produits[produit];
    label.appendChild(casse);
    label.appendChild(document.createTextNode(" " + produits[produit]));
    label.appendChild(document.createElement("br"));
    const p_1 = document.createElement("p");
    p_1.style.display ="none";
    p_1.innerHTML = `Quantité: <label><input type="number" min="1"></label><br>`;
    const p_2 = document.createElement("p");
    p_2.style.display = "none"
    p_2.textContent = "prix: " + prix[produit] + " USD";
    label.appendChild(p_1);
    label.appendChild(p_2);
    conteneur.appendChild(label);
    casse.addEventListener("change", function() {
      affiche(casse, p_1, p_2);
    });
  }
}
function affiche(checkbox,...paragraph ){
  if (checkbox.checked) {
    paragraph.forEach(el =>{
      el.style.display = "block";
    })
  } 
  else {
    paragraph.forEach(el =>{
      el.style.display = "none";
    })
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
