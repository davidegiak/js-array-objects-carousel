let slides = [
    {
        foto: "01.webp",
        titolo: "Spiderman",
        descrizione: "Bellissima foto"
    },
    {
        foto: "02.webp",
        titolo: "Ratchet & clank",
        descrizione: "Bellissima foto"
    },
    {
        foto: "03.webp",
        titolo: "Videogioco",
        descrizione: "Bellissimo videogioco"
    },
    {
        foto: "04.webp",
        titolo: "Gatto",
        descrizione: "Un gatto"
    },
    {
        foto: "05.webp",
        titolo: "Avengers",
        descrizione: "Ulkckckckck"
    }
]
let nSlides = slides.length;
let slideSelected = slides[0];
for (let i = 0; i < 1; i++) {
    slideSelected = slides[i];
    document.querySelector(".container").innerHTML += cards(slideSelected.foto, slideSelected.titolo, slideSelected.descrizione)
    
}

document.querySelector(".nxt").addEventListener("click", function () {
    for (let i = 0; i < slides.length; i++) {
        slideSelected = slides[i];
        if (slideSelected.classList.contains("active")){
            slideSelected.classList.remove("active")
        }
    }
})