/*
 *  Check if a city is in
 */
function cityValid(city){

  //If city is not found
  if(northAmerica.indexOf(city) > -1){
    return true;
  }
  else {
    return false;
  }

}

/*
 * TODO Documentation
 */
function getDateLimit(addedYears){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if( dd < 10 ){
    dd = '0' + dd;
  }

  if( mm < 10 ){
    mm = '0' + mm;
  }

  if( addedYears > 0){
    yyyy = yyyy + addedYears;
  }

  today = yyyy + '-' + mm + '-' + dd;

  return today;
}
