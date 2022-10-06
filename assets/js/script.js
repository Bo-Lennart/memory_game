document.addEventListener('DOMContentLoaded'), () => {


    const cardDeck = [
        {
            card: 'card1'
            img: './memory_game/assets/images/alarm_clock.png'
        },
        
        {
            card: 'card2'
            img: './memory_game/assets/images/camera.png'
        },

        {
            card: 'card3'
            img: './memory_game/assets/images/envelope.png'
        },

        {
            card: 'card4'
            img: './memory_game/assets/images/smiley.png'
        },

        {
            card: 'card5'
            img: './memory_game/assets/images/soup.png'
        },

        {
            card: 'card6'
            img: './memory_game/assets/images/timer.png'
        },

        {
            card: 'card7'
            img: './memory_game/assets/images/water_drop.png'
        },

        {
            card: 'card8'
            img: './memory_game/assets/images/yoda.png'
        }

    ]

    const grid = document.getElementsByClassName('game_field');

    function callDeck() {
        for (let i = 0; i <cardDeck.length; i++ ) {
            var gameCard = document.createElement('img');
            gameCard.setAttribute('src', '/assets/images.png');
            gameCard.setAttribute('card_id', card);
            grid.appendChild(gameCard); 
        }
    }


    function checkForMatch() {

    }

    function turnCard() {

    }

callDeck()

}