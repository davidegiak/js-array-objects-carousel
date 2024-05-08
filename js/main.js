// ********************************************** ARRAY DI OGGETTI*****************************************
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

//*********************************************************VARIABILI GLOBALI */
let i = 0;
let attiva = slides[i]
let nSlides = slides.length;
let creazione = document.querySelector(".container");

//***********************************************************CREO LA PRIMA CARD */
creazione.innerHTML += card(attiva.foto, attiva.titolo, attiva.descrizione);

//*************************************************************EVENTO SUL CLICK IN AVANTI*/
document.querySelector(".nxt").addEventListener("click", function () {
    if (i < nSlides - 1) {
        creazione.innerHTML = "";
        i++;
        attiva = slides[i];
        creazione.innerHTML += card(attiva.foto, attiva.titolo, attiva.descrizione);
    }
    else if (i == nSlides - 1) {
        creazione.innerHTML = "";
        i=0;
        attiva = slides[i];
        creazione.innerHTML += card(attiva.foto, attiva.titolo, attiva.descrizione);
    }
})

//*************************************EVENTO SUL CLICK INDIETRO */
document.querySelector(".prev").addEventListener("click", function () {
    if (i == 0) {
        creazione.innerHTML = "";
        i=4;
        attiva = slides[i];
        creazione.innerHTML += card(attiva.foto, attiva.titolo, attiva.descrizione);
    }
    else {
        creazione.innerHTML = "";
        i--;
        attiva = slides[i];
        creazione.innerHTML += card(attiva.foto, attiva.titolo, attiva.descrizione);
    }
})

// let nSlides = slides.length;
// let slideSelected = slides[0];
// let creazione = document.querySelector(".container").innerHTML += cards(slideSelected.foto, slideSelected.titolo, slideSelected.descrizione);
// let card = document.querySelector(".card");
// if (slideSelected) {
//     card.classList.replace("none", "active");
// }
// document.querySelector(".nxt").addEventListener("click", function () {
//     if (slideSelected) {
//         card.classList.replace("active", "none");
//         ++slideSelected
//         card.classList.replace("none", "active");
        

//     }
// })



// for (let i = 0; i < slides.length; i++) {
//     let slideSelected = slides[i];
//     let creazione = document.querySelector(".container").innerHTML += cards(slideSelected.foto, slideSelected.titolo, slideSelected.descrizione);
//     creazione;
//     if (i == 0) {
//         let card = document.querySelector(".card");
//         card.classList.replace("none", "active");
//     }
//     document.querySelector(".nxt").addEventListener("click", function () {
//         let card = document.querySelector(".card");
//         card.classList.replace("active", "none");
//         ++
//         card.classList.replace("none", "active");
//     })
    
// }
    
// }
// document.querySelector(".nxt").addEventListener("click", function () {
//     for (let i = 0; i < nSlides; i++) {
//         slideSelected = slides[i];
//         let card = document.querySelector(".card");
//         if (slideSelected) {
//             card.classList.add("active");
//             card.classList.remove("none");
//         }
//         else if (card.classList.contains("active")) {
//             card.classList.remove("active");
//             card.classList.add("none")
//             i++
//         }
        
//     }
// })

// document.querySelector(".nxt").addEventListener("click", function () {
//     for (let i = 0; i < slides.length; i++) {
//         slideSelected = slides[i];
//         if (slideSelected.classList.contains("active")){
//             slideSelected.classList.remove("active")
//         }
//     }
// })