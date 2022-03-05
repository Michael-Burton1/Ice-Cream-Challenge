let iceCreamFlavors = ['Vanilla', 'Chocolate', 'Cherry Garcia', 'Neopolitan', 'French Vanilla',  'Bubble Gum', 'Butter Pecan']


let text ="";
iceCreamFlavors.map(displayFlavors)

function displayFlavors(flavor) {
  text += `<li>${flavor}</li>`
}

$('ul').html( text );