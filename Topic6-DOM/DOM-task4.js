/*
 * Function for hiding an displaying an element that is displayed as block
 */
function displayOrHideBlock(element){
  if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
  } else {
      element.style.display = 'none';
  }
}

/*
 * Function for hiding a footer linkset
 */
function displayOrHideLinkset(linkset, title){
  if (linkset.style.display === 'none' || linkset.style.display === '') {
      linkset.style.display = 'block';

      title.classList.add("list-title");

  } else {
      linkset.style.display = 'none';

      title.classList.remove("list-title")
  }
}

/*
 * Add listeners for responsive top menu and footer
 */
function addResponsiveListeners(){

  // -- Page header menu --
  document.getElementById("show-topmenu").addEventListener("click", function(){
    var menu = document.getElementById('top-menu').getElementsByTagName("ul")[0];
    displayOrHideBlock(menu);
  });

  document.getElementById("show-topmenu").addEventListener("hover",  function(){
    var menu = document.getElementById('top-menu').getElementsByTagName("ul")[0];
    displayOrHideBlock(menu);
  });

  // -------- Footer buttons --------

    // About
  var aboutlinks = document.getElementById("about-links");
  document.getElementById("about-links-button").addEventListener("click", function(){
    displayOrHideLinkset(aboutlinks, this);
  });

  document.getElementById("about-links-button").addEventListener("hover", function(){
    displayOrHideLinkset(aboutlinks, this);
  });

    // Travel extras
  var extraslinks  = document.getElementById("extras-links");
  document.getElementById("extras-links-button").addEventListener("click", function(){
    displayOrHideLinkset(extraslinks, this);
  });

  document.getElementById("extras-links-button").addEventListener("hover", function(){
    displayOrHideLinkset(extraslinks, this);
  });

    // Customer service
  var customerlinks = document.getElementById("customer-service-links");
  document.getElementById("customer-service-links-button").addEventListener("click", function(){
    displayOrHideLinkset(customerlinks, this);
  });

  document.getElementById("customer-service-links-button").addEventListener("hover", function(){
    displayOrHideLinkset(customerlinks, this);
  });

    // Follow us
  var sociallinks = document.getElementById("social-links");
  document.getElementById("social-links-button").addEventListener("click", function(){
    displayOrHideLinkset(sociallinks, this);
  });

  document.getElementById("social-links-button").addEventListener("hover", function(){
    displayOrHideLinkset(sociallinks, this);
  });
}
