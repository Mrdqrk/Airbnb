function filterByCity(targetCity, listingCityArray) {
//define array 
let indices = [];
  
  //loop 
for (let i=0;i < listingCityArray.length; i++ ){
  
   //check city 
 if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
    
    //find match
    indices.push(i);
  }
}
  return indices;

}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  
  //define array 
  let indices = [];

    //loop 
  for (let i=0;i < listingPriceArray.length; i++ ){

     //check city 
    if (listingPriceArray[i]>=minPrice && listingPriceArray[i]<=maxPrice){

      //find match
      indices.push(i);
    }
  }
    return indices;
//return [...listingPriceArray.keys()]
  }

  


// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!

  //define array 
  let indices = [];

    //loops
  for (let i=0;i < listingTypeArray.length; i++ ){
    for (let j=0;j < targetTypes.length; j++ ){
    
     //check city 
    if (listingTypeArray[i] === targetTypes[j]){

      //find match
      indices.push(i);
    }
  }
  }
    return indices;
  //return [...listingTypeArray.keys()]
  
}