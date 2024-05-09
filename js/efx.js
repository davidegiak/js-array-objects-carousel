function card(foto,titolo,descrizione ) {
    for (let i = 0; i < 1; i++) {
        return`
        <div class="card">
            <div class="img-cont">
            <img class="img" src="img/${foto}" alt="">
            </div>
            <div class="description">
                <h1>${titolo}</h1>
                <h4>${descrizione}</h4>
            </div>
        </div>
        `   
    }
        
}

function tumb(foto, ) {
    return`
    <div class="tumb">
        <div class="img-cont-tumb">
        <img class="img" src="img/${foto}" alt="">
        </div>
    </div>
    `   
        
}