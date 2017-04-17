
var onewayButton = document.getElementById("oneway");
var roundtripButton = document.getElementById("roundtrip");
var returnDateContainer = document.getElementById("return-date-container");

var departureDateField = document.getElementById("departure-date");
var returnDateField = document.getElementById("return-date");
var yearsAvailable = 1;

var fromField = document.getElementById("from-airport");
var toField = document.getElementById("to-airport");
var cityError = false;

var fromAirport = "";
var toAirport = "";


function formValidationListeners(){

  // Hide return date field if oneway is selected
  onewayButton.addEventListener("click", triptypeListener);
  roundtripButton.addEventListener("click", triptypeListener);


  // -------------------- CITIES --------------------

  // Autocomplete for cities using Awesomplete.js library
  // http://leaverou.github.io/awesomplete
  new Awesomplete(fromField, {
    list: citiesWithCountry,
    minChars: 2
  });

  new Awesomplete(toField, {
    list: citiesWithCountry,
    minChars: 2
  });


  // Check that from and to cities are valid cities
  // and cities are not the same
  // fromField.addEventListener("awesomplete-close", validateFromCity);
  fromField.addEventListener("keyup", validateFromCity);

  // toField.addEventListener("awesomplete-close", validateToCity);
  toField.addEventListener("keyup", validateToCity);

  // -------------------- DATES --------------------


  // When departure date is selected, change the return date min-limit
  departureDateField.addEventListener("oninput", function(){
    console.log("Departure date changed!");
  });

  // TODO

  // If departure date is set to be after the return date
  // change the return date to match the departure date

  //TODO


}


/*
 * Function which is triggered when the user selects/unselects the trip type
 * (oneway / roundtrip)
 */
function triptypeListener(){

  // Oneway selected, hide return date
  if(onewayButton.checked == true){
    returnDateContainer.style.visibility = "hidden";
  }
  // Roundtrip selected, display return date selection
  if(roundtripButton.checked == true){
    returnDateContainer.style.visibility = "visible";
  }

}

/*
 * Set initial date limits
 * TODO Documentation
 */
function setInitialDateLimits () {

  departureDateField.min = getLowerDateLimit(new Date());
  departureDateField.max = getUpperDateLimit(new Date(), yearsAvailable);

  returnDateField.min = getLowerDateLimit(new Date());
  returnDateField.max = getUpperDateLimit(new Date(), yearsAvailable);

}


/*
 *  Check if a city is in
 */
function cityValid(city){
  //If city is not found
  if(cities.indexOf(city) > -1){
    return true;
  }
  else {
    return false;
  }
}


function validateFromCity(){

  // If entered city is not among possible destinations, display error message
  if(!cityValid(fromField.value)){
    document.getElementById("from-airport-error").innerHTML = "Invalid city";
    fromField.style.border = "1px solid #E50278";
  }
  else {
    // If city is the same as the city customer wants to fly to, display error message
    if(fromField.value === toField.value){
      document.getElementById("from-airport-error").innerHTML = "Same city";
      fromField.style.border = "1px solid #E50278";
    }
    else {
      document.getElementById("from-airport-error").innerHTML = "";
      fromField.style.border = "1px #AFAFAF solid";
    }
  }
}


function validateToCity(){

  // If entered city is not among possible destinations, display error message
  if(!cityValid(toField.value)){
    document.getElementById("to-airport-error").innerHTML = "Invalid city";
    toField.style.border = "1px solid #E50278";
  }
  else {
    // If city is the same as the city customer wants to fly to, display error message
    if(toField.value === fromField.value){
      document.getElementById("to-airport-error").innerHTML = "Same city";
      toField.style.border = "1px solid #E50278";
    }
    else {
      document.getElementById("to-airport-error").innerHTML = "";
      toField.style.border = " 1px #AFAFAF solid";
    }
  }
}

/*
 * TODO Documentation
 */
function getUpperDateLimit(mindate, addedYears){

  var date = new Date(Date.parse(mindate));
  console.log("var date = ", date);

  var dd = date.getDate();
  var mm = date.getMonth() + 1; // January is 0
  var yyyy = date.getFullYear();

  if( dd < 10 ){
    dd = '0' + dd;
  }

  if( mm < 10 ){
    mm = '0' + mm;
  }

  if( addedYears > 0){
    yyyy = yyyy + addedYears;
  }

  maxDate = yyyy + '-' + mm + '-' + dd;

  return maxDate;
}

/*
 *
 */
function getLowerDateLimit(mindate){
  return getUpperDateLimit(mindate, 0);
}
