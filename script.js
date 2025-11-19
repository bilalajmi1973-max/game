function nextStep(step) {
    document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
    const el = document.getElementById("step" + step);
    if (el) el.classList.remove("hidden");
}

/* Floating hearts background */
const heartsContainer = document.getElementById("hearts");

function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 28) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(spawnHeart, 350);
