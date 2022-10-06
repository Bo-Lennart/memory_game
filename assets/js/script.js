document.addEventListener('DOMContentLoaded', () => {

// Memory game deck options
    const cardDeck = [
        {
            card: 'card1',
            img: 'assets/images/alarm_clock.png'
        },
        {
            card: 'card1',
            img: 'assets/images/alarm_clock.png'
        },
        
        {
            card: 'card2',
            img: 'assets/images/camera.png'

        },
        {
            card: 'card2',
            img: 'assets/images/camera.png'

        },
        
        {
            card: 'card3',
            img: 'assets/images/envelope.png'
        },
        {
            card: 'card3',
            img: 'assets/images/envelope.png'
        },

        {
            card: 'card4',
            img: 'assets/images/smiley.png'
        },
        {
            card: 'card4',
            img: 'assets/images/smiley.png'
        },

        {
            card: 'card5',
            img: 'assets/images/soup.png'
        },
        {
            card: 'card5',
            img: 'assets/images/soup.png'
        },

        {
            card: 'card6',
            img: 'assets/images/timer.png'
        },
        {
            card: 'card6',
            img: 'assets/images/timer.png'
        },

        {
            card: 'card7',
            img: 'assets/images/water_drop.png'
        },
        {
            card: 'card7',
            img: 'assets/images/water_drop.png'
        },

        {
            card: 'card8',
            img: 'assets/images/yoda.png'
        },
        {
            card: 'card8',
            img: 'assets/images/yoda.png'
        }

    ]
    
    const gameBoard = document.getElementById('game_body')
    

    /**
     * Create game board out of cardDeck array
     */
    function callDeck() {
        for (let img in cardDeck) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/background.png')
            card.setAttribute('data-id', img)
            gameBoard.appendChild(card)
        }
    }

    function checkForMatch() {
        
    }

    function turnCard() {

    }



    callDeck()

})