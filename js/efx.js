function card(foto,titolo,descrizione ) {
    for (let i = 0; i < 1; i++) {
        return`
        <div class="card">
            <img class="img" src="img/${foto}" alt="">
            <div class="description">
                <h1>${titolo}</h1>
                <h4>${descrizione}</h4>
            </div>
        </div>
        `   
    }
        
}