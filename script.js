// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    } else {

        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    }

});


// ==========================
// SEARCH
// ==========================

const search = document.querySelector("#search");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ==========================
// CATEGORY FILTER
// ==========================

const buttons = document.querySelectorAll(".categories button");

buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");

const category = button.innerText;

cards.forEach(card => {

if(category === "All"){

card.style.display="block";

}else{

if(card.dataset.category === category){

card.style.display="block";

}else{

card.style.display="none";

}

}

});

});

});


// ==========================
// LIGHTBOX
// ==========================

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector("#lightbox-img");

const closeBtn = document.querySelector(".close");

cards.forEach(card=>{

card.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=card.querySelector("img").src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});


// ==========================
// HERO IMAGE ANIMATION
// ==========================

const heroImage=document.querySelector(".hero-image img");

setInterval(()=>{

heroImage.style.transform="scale(1.03)";

setTimeout(()=>{

heroImage.style.transform="scale(1)";

},1200);

},2500);