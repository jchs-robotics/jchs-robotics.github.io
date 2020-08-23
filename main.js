function removePageHighlight() {
  document.getElementById("active").id = "inactive";
}

function replacePageHighlight() {
  document.getElementById("inactive").id = "active";
}

document.getElementByClassName("navButton").onmouseenter="removePageHighlight()"
document.getElementByClassName("navButton").onmouseleave="replacePageHighlight()"
