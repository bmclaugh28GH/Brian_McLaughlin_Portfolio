// **********************************************
// get random number within a range
// **********************************************

function getRandomNumInRange (myLowerBound, myUpperBound) {

   return Math.floor (Math.random () * (myUpperBound - myLowerBound + 1)) + myLowerBound;

} // getRandomNumInRange

// **********************************************
// get random number from among a group of numbers
// **********************************************

function getRandomNumFromArray (myArray) {

   var increment = numberOptions[Math.round(Math.random())];
   return increment;

} // getRandomNumFromArray

// **********************************************
// convert an ASCII number to its character
// *********************************************/

function getChar (myNum) {

   return String.fromCharCode (myNum);

} // getChar

function getTimeStr (d) {

   var str = d.getHours() + ':';

   if (d.getMinutes() >= 0 && d.getMinutes() <= 9){
      str+='0';
   }
   str+=d.getMinutes() + ':';

   if (d.getSeconds() >= 0 && d.getSeconds() <= 9){
      str+='0';
   }
   str+=d.getSeconds();

   return str;

}

// **********************************************
// get lat, long, provide getters for each
// **********************************************

// **********************************************
// geolocation
// **********************************************

var latitude;
var longitude;

function getLatitude () {
   return latitude;
}; // getLatitude

function getLongitude () {
   return longitude;
}; // getLongitude

function getLocation() {

  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition (loadPosition);
  }
  else {
    alert ("Geolocation is not supported by this browser.");
  }
} // getLocation

// This will get called after getCurrentPosition()
function loadPosition (position) {

  // Grab coordinates from the given object
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log ("Your coordinates are Latitude: " + latitude + " Longitude " + longitude);

} // loadPosition

// **********************************************
// **********************************************
