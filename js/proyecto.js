function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById("openPopupButton").addEventListener("click", openPopup);
document.getElementById("closePopupButton").addEventListener("click", closePopup);

window.addEventListener("click", function(event) {
    var popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
});
