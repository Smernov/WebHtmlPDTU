function buttonClickedC() {
    document.getElementById('go-to-rts').style.display = 'none';
}

function buttonClickedO() {
    window.location.href = 'https://discord.com/channels/978340995936706652/981141665555308554';
}

function movingPlanet() {
    document.getElementById('go-to-rts').style.display = 'block';
}

document.getElementById('go-to-rtsBC').onclick = buttonClickedC;
document.getElementById('go-to-rtsBO').onclick = buttonClickedO;
document.getElementById('mov-plnt').onclick = movingPlanet;

document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var item = document.getElementById("item");
    
    container.addEventListener("mousemove", function(event) {
        // Получение координат курсора мыши внутри контейнера
        var x = event.clientX - container.getBoundingClientRect().left;
        var y = event.clientY - container.getBoundingClientRect().top;
        
        // Ограничение движения предмета внутри контейнера
        var maxX = container.clientWidth - item.offsetWidth;
        var maxY = container.clientHeight - item.offsetHeight;
        
        // Установка новых координат для предмета
        item.style.left = Math.min(Math.max(x, 0), maxX) + "px";
        item.style.top = Math.min(Math.max(y, 0), maxY) + "px";
    });
});
// Функция для проверки видимости элемента на экране
function isElementInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let menu = document.querySelector(".fixed-menu");

document.querySelector("mobile-button").addEventListener("Click", 
function(event)
{
  document.querySelector("mobile-menu").classList.toggle("hide")
})

menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link') ){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
        let mobile = document.querySelector('.mobile-menu')
        if(!mobile.classList.contains('hide')){
          mobile.classList.add('hide')
        }
    }
});

let classLink = '.main-link';
window.onscroll = function() {
  let h = document.documentElement.clientHeight;
  if (window.scrollY >= h*4 ){
    classLink = '.comments-link';
  }
  else if (window.scrollY >= h*3){
    classLink = '.works-link';
  }
  else if (window.scrollY >= h*2 ){
    classLink = '.skills-link';
  }
  else if (window.scrollY >= h){
    classLink = '.about-link';
  }
  else{
    classLink = '.main-link';
  }
  let activeBtn = document.querySelector('.active');
  let newActiveBtn = document.querySelector(classLink);
  if (!newActiveBtn.classList.contains('active')){
    newActiveBtn.classList.add('active');
    activeBtn.classList.remove('active')
  }
};




