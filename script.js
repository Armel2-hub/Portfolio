// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");
function showSection(sectionId, element){

    document.querySelectorAll('.page-section').forEach(section=>{
        section.classList.remove('active-section');
    });

    document.getElementById(sectionId).classList.add('active-section');

    document.querySelectorAll('.navlist a').forEach(link=>{
        link.classList.remove('active');
    });

    element.classList.add('active');
}
function showSection(sectionId, element){

    document.querySelectorAll('.page-section').forEach(sec=>{
        sec.classList.remove('active-section');
    });

    document.getElementById(sectionId).classList.add('active-section');

    document.querySelectorAll('.navlist a').forEach(link=>{
        link.classList.remove('active');
    });

    if(element){
        element.classList.add('active');
    }
}
function showSection(sectionId, element){

    document.querySelectorAll('.page-section').forEach(sec=>{
        sec.classList.remove('active-section');
    });

    document.getElementById(sectionId).classList.add('active-section');

    document.querySelectorAll('.navlist a').forEach(link=>{
        link.classList.remove('active');
    });

    if(element){
        element.classList.add('active');
    }
}
function showSection(sectionId, element) {

    // remove active class from all nav links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });

    // add active to clicked
    element.classList.add("active");

    // show sections
    document.querySelectorAll(".page-section").forEach(sec => {
        sec.classList.remove("active-section");
    });

    document.getElementById(sectionId).classList.add("active-section");
}


