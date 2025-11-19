let current = 0;

function nextStep(n){
    document.getElementById("screen"+current).classList.remove("active");
    document.getElementById("screen"+n).classList.add("active");
    current = n;
}

const container=document.getElementById("floating-hearts");

function floatHeart(){
  const h=document.createElement("div");
  h.textContent="💖";
  h.style.left=Math.random()*100+"vw";
  h.style.top="100vh";
  h.style.fontSize=(Math.random()*20+20)+"px";
  container.appendChild(h);
  setTimeout(()=>h.remove(),5000);
}
setInterval(floatHeart,500);
