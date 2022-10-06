document.addEventListener('DOMContentLoaded'), () => {


    const cardDeck = [
        {
            card: 'card1',
            img: '.assets/images/alarm_clock.png',
        },
        
        {
            card: 'card2',
            img: '.assets/images/camera.png',

        },
        
        {
            card: 'card3',
            img: '.assets/images/envelope.png',
        },

        {
            card: 'card4',
            img: '.assets/images/smiley.png',
        },

        {
            card: 'card5',
            img: '.assets/images/soup.png',
        },

        {
            card: 'card6',
            img: '.assets/images/timer.png',
        },

        {
            card: 'card7',
            img: '.assets/images/water_drop.png',
        },

        {
            card: 'card8',
            img: '.assets/images/yoda.png',
        }

    ]

    const grid = document.getElementsByClassName('game_field');

    function callDeck() {
        for (let card in cardDeck) {
            var gameCard = document.createElement('img');
            gameCard.setAttribute('src', '/assets/images');
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