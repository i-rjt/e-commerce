
function main() {

}

(function favicon(){
    const url = "https://res.cloudinary.com/dunm1zbgo/image/upload/v1736161921/obj_bmblkp.ico";
    const icon = document.createElement("link");
    icon.type = "image";
    icon.rel = "icon";
    icon.href = url;
    document.head.appendChild(icon);
})();


(function logo() {
    const url = "https://res.cloudinary.com/dunm1zbgo/image/upload/v1736374635/image_qiz3hq.svg";
    const img = document.querySelector(".logo");
    const img2 = document.querySelector(".img2");
    img2.src = url;
    img.src = url;
    img.alt = "SrcBay";
    img.style.background = "transparent";
    // img.style.width = "140px";
    img.style.height = "60px";
})();


(function anchor() {
    document.querySelector(".dropButton").addEventListener("onmouseover", () => {
        document.getElementById("logo").style.display = "none";
    });
    
    const article = document.getElementById("article");
    const resource = document.getElementById("resource");
    const roadmap = document.getElementById("roadmap");
    const about = document.getElementById("about");

    article.href = "./article.html";
    resource.href = "./resource/resource.html";
    roadmap.href = "./roadmap/roadmaps.html";
    about.href = "./about.html";

    article.style.textDecoration = "none";
    resource.style.textDecoration = "none";
    roadmap.style.textDecoration = "none";
    about.style.textDecoration = "none";
})()
