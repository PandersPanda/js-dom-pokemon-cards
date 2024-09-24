let cardListHTML = document.getElementsByClassName('cards')[0] 

function addTradingCardList(){
    cardListHTML.innerHTML = ''
    for(pokemon of data){
        let newPokemon = document.createElement('li')
        newPokemon.classList.add('card')
        newPokemon.innerHTML = `
            <h2 class="card--title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img
                width="256"
                class="card--img"
                src=${pokemon.sprites.other['official-artwork'].front_default}
            />
            <ul class="card--text">
                <li>HP: ${pokemon.stats['0'].base_stat}</li>
                <li>ATTACK: ${pokemon.stats['1'].base_stat}</li>
                <li>DEFENSE: ${pokemon.stats['2'].base_stat}</li>
                <li>SPECIAL-ATTACK: ${pokemon.stats['3'].base_stat}</li>
                <li>SPECIAL-DEFENSE: ${pokemon.stats['4'].base_stat}</li>
                <li>SPEED: ${pokemon.stats['5'].base_stat}</li>
            </ul>
        `
        cardListHTML.appendChild(newPokemon)
    }
    
}

console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
addTradingCardList()