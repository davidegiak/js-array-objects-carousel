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

for (let i = 0; i < slides.length; i++) {
    const element = slides[i];
    document.querySelector("body").innerHTML += cards(element.foto, element.titolo, element.descrizione)
    
}