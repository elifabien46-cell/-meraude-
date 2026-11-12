
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


function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💗";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);
