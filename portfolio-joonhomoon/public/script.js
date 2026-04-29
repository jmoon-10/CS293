//Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

//Name Typing animation
const text = "Joonho Moon";
const speed = 300;
let i = 0;

const nameEl = document.getElementById("name");
nameEl.classList.add("typing");
function typing(){
    if(i < text.length){
        nameEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
        if(i == text.length){
            nameEl.classList.remove("typing");
        }
    }
}
setTimeout(() =>{
    typing();
}, 2100);

//Basic Scroll transition
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.hidden');
    const triggerBottom = window.innerHeight * 0.70; // Trigger when element is at x% of screen height

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
        el.classList.add('show');
    }
    else{
        el.classList.remove('show');
    }
  });
})

//refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
    const myform = document.querySelector("contact-form");
    myform.reset();
}