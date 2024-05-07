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

document.querySelector(".nxt").addEventListener("click", function () {
    for (let i = 0; i < nSlides; i++) {
        slideSelected = slides[i];
        document.querySelector(".container").innerHTML += cards(slideSelected.foto, slideSelected.titolo, slideSelected.descrizione);
        let card = document.querySelector(".card");
        if (slideSelected) {
            card.classList.add("active");
            card.classList.remove("none");
        }
        else if (card.classList.contains("active")) {
            card.classList.remove("active");
            card.classList.add("none")
            i++
        }
        
    }
})

// document.querySelector(".nxt").addEventListener("click", function () {
//     for (let i = 0; i < slides.length; i++) {
//         slideSelected = slides[i];
//         if (slideSelected.classList.contains("active")){
//             slideSelected.classList.remove("active")
//         }
//     }
// })