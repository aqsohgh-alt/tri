const menuBtn=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");
const navLinks=document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click",()=>navbar.classList.toggle("active"));
navLinks.forEach(link=>link.addEventListener("click",()=>navbar.classList.remove("active")));

const themeBtn=document.getElementById("theme-btn");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    const icon=themeBtn.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

const typingText=document.getElementById("typing");
const texts=["Web Developer","Frontend Developer","Programmer","UI/UX Enthusiast"];
let textIndex=0,charIndex=0,deleting=false;

function typeEffect(){
    const current=texts[textIndex];
    if(!deleting){
        typingText.textContent=current.substring(0,charIndex+1);
        charIndex++;
        if(charIndex===current.length){
            deleting=true;
            setTimeout(typeEffect,1400);
            return;
        }
    }else{
        typingText.textContent=current.substring(0,charIndex-1);
        charIndex--;
        if(charIndex===0){
            deleting=false;
            textIndex=(textIndex+1)%texts.length;
        }
    }
    setTimeout(typeEffect,deleting?50:100);
}
typeEffect();

const scrollTopBtn=document.getElementById("scrollTopBtn");
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
    scrollTopBtn.style.display=window.scrollY>400?"block":"none";

    let current="";
    sections.forEach(section=>{
        const top=section.offsetTop-160;
        if(window.scrollY>=top && window.scrollY<top+section.offsetHeight){
            current=section.id;
        }
    });

    navLinks.forEach(link=>{
        link.classList.toggle("active",link.getAttribute("href")==="#"+current);
    });
});

scrollTopBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const contactForm=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");

contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    formMessage.className="warning";
    formMessage.textContent="Pesan belum terkirim karena formulir ini belum terhubung ke layanan pengiriman. Hubungkan formulir ke backend atau layanan email untuk mengaktifkan fitur kirim.";
});