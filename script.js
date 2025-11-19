function nextStep(step) {
    document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
    document.getElementById("step" + step).classList.remove("hidden");
}

const heartsContainer = document.getElementById("hearts");

function spawnHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(spawnHeart, 300);
