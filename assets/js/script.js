document.addEventListener('DOMContentLoaded'), () => {


    const cardDeck = [
        card: 'card1',
        
        card: 'card2',
        
        card: 'card3',

        card: 'card4',
        
        card: 'card5',
        
        card: 'card6',

        card: 'card7',
        
        card: 'card8',

    ]

    function callDeck() {
        for (let card in callDeck) {
            var gameCard = document.createElement('img');
            gameCard.setAttribute('card_id', card)
            grid.appendChild(card);
        }
    }

    function checkForMatch() {

    }

    function turnCard() {

    }

callDeck()

}