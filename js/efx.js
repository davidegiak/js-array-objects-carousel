function cards(foto,titolo,descrizione ) {
    return `
    <main>
    <div class="container">
        <div class="card">
            <img src="img/${foto}" alt="">
            <div class="description">
                <h1>${titolo}</h1>
                <h4>${descrizione}</h4>
            </div>
        </div>
    </div>
</main>
    `
}