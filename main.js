function removePageHighlight() {
  document.getElementById("active").id = "inactive";
}

function replacePageHighlight() {
  document.getElementById("inactive").id = "active";
}

document.getElementsByClassName("navButton").onmouseenter=removePageHighlight();
document.getElementsByClassName("navButton").onmouseleave=replacePageHighlight();
