
function openGift() {
    const gift = document.getElementById("gift");
    const message = document.getElementById("message");

    gift.style.transform = "scale(0)";
    gift.style.transition = "transform 0.5s ease";

    setTimeout(() => {
        gift.style.display = "none";
        message.classList.remove("hidden");
    }, 500);
}
