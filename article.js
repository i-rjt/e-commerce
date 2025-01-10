(function fetchPage(){
    const url = "./articles/one.html";
    fetch(url).then(data => data.text()).then(data => display(data));
})();


function display(page){
    const article = document.querySelector("main");
    article.innerHTML = page;
    // console.log(page);
}