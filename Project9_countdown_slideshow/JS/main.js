var myIndex = 0;
countdown();

function countdown() { //countdown function 
  var i;//our vairable i
  var x = document.getElementsByClassName("mySlides");//retrieving by 
  for (i = 0; i < x.length; i++) {//incrementing 1 for i
    x[i].style.display = "none";  //this allows for the slideshow to dislplay properly one image at a time
  }
  myIndex++;//incrementing by 1
  if (myIndex > x.length) {myIndex = 1}  //allows images to go in a loop 
  x[myIndex-1].style.display = "block";  //allows for our images display
  setTimeout(countdown, 3500); // changes image every 3.5 seconds
}
