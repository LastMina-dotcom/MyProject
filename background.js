[]
const colors = ["red","black","blue","green","yellow"]
const icons = ["fa-code","fa-laptop-code","fa-wifi","fa-server","fa-bug","fa-mobile-screen","fa-globe","fa-gears"];
const container = document.querySelector(".background-icons");

for (let i = 0; i < 30; i++) {
    const icon = document.createElement("i")
    const randomicon =icons[Math.floor(Math.random()*icons.length)];
    icon.classList.add("fa-solid",randomicon,"floating-icon");

    icon.style.left = Math.random() * 100 + "vw";
    icon.style.top = Math.random() * 100 + "vh";

    icon.style.fontSize = (20 + Math.random() * 50) + "px";
    icon.style.animationDuration = (6+Math.random()*12) + "s" ;
    icon.style.color = colors[Math.floor(Math.random()*colors.length)] 

    icon.style.setProperty("--moveX",(Math.random()*200-100)+"px",);
    icon.style.setProperty("--moveY",(Math.random()*200-100)+"px");
    container.appendChild(icon);
}