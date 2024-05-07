function cards(foto,titolo,descrizione ) {
    return `
    <div class="card active">
        <img class="img" src="img/${foto}" alt="">
        <div class="description">
            <h1>${titolo}</h1>
            <h4>${descrizione}</h4>
        </div>
    </div>
    `
}