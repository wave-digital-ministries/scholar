function techHide(){
  var x = document.getElementByClas("tech");
if (x.style.display === "none") {
  document.getElementById("techHide").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("techHide").className = "buttonY_orange";
}
}
function softwareHide(){
  var x = document.getElementById("softwareHide");
if (x.style.display === "none") {
  document.getElementById("softwareButt").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("softwareButt").className = "buttonY_orange";
}
}
function googleHide(){
  var x = document.getElementById("googleHide");
if (x.style.display === "none") {
  document.getElementById("googleButt").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("googleButt").className = "buttonY_orange";
}
}




function searching(){
  var x = document.getElementById("myUL");
if (x.style.display === "none") {
 x.style.display = "block";
} else {
 x.style.display = "none";
}
}
function searched(){
/* document.getElementById("searchButt").style.visibility = "hidden"; */
document.getElementById("topapps").style.visibility = "hidden";
document.getElementById("myUL").style.visibility = "visible";
document.getElementById("myInput").style.width = "90%";
document.getElementById("myUL").style.height = "100%";

}
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
