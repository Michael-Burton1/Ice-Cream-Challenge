let iceCreamFlavors = ['Vanilla', 'Chocolate', 'Cherry Garcia', 'Neopolitan', 'French Vanilla',  'Bubble Gum', 'Butter Pecan']


let text ="";
iceCreamFlavors.forEach(displayFlavors)

document.getElementById('ice-cream-list').innerHTML = text;

function displayFlavors(flavor) {
  text += `<li>${flavor}</li>`
}


