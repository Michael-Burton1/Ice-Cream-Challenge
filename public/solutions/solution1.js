let iceCreamFlavors = ['Vanilla', 'Chocolate', 'Cherry Garcia', 'Neopolitan', 'French Vanilla',  'Bubble Gum', 'Butter Pecan']

const displayFlavors=()=>{
  let flavorReturn= "";
    for(let i=0; i< iceCreamFlavors.length; i++){
      flavorReturn += `<li>${iceCreamFlavors[i]}</li>`
    }
    $("ul").html( flavorReturn );
    
}

displayFlavors();
