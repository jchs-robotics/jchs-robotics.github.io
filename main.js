function removePageHighlight() {
  document.getElementById("active").id = "inactive";
}

function replacePageHighlight() {
  document.getElementById("inactive).id = "active";
}

document.getElementById("header").onmouseenter = "removePageHighlight()";
document.getElementById("header").onmouseleave = "replacePageHighlight()";
