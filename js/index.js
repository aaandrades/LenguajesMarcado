var liContainer = document.getElementById("navegacion");
var li_ref = liContainer.getElementsByClassName("nav_item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < li_ref.length; i++) {
    li_ref[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}