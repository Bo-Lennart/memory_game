document.addEventListener('DOMContentLoaded', () => {

// Memory game deck options
    const cardDeck = [
        {
            name: 'card1',
            img: 'assets/images/alarm_clock.png'
        },
        {
            name: 'card1',
            img: 'assets/images/alarm_clock.png'
        },
        
        {
            name: 'card2',
            img: 'assets/images/camera.png'

        },
        {
            name: 'card2',
            img: 'assets/images/camera.png'

        },
        
        {
            name: 'card3',
            img: 'assets/images/envelope.png'
        },
        {
            name: 'card3',
            img: 'assets/images/envelope.png'
        },

        {
            name: 'card4',
            img: 'assets/images/smiley.png'
        },
        {
            name: 'card4',
            img: 'assets/images/smiley.png'
        },

        {
            name: 'card5',
            img: 'assets/images/soup.png'
        },
        {
            name: 'card5',
            img: 'assets/images/soup.png'
        },

        {
            name: 'card6',
            img: 'assets/images/timer.png'
        },
        {
            name: 'card6',
            img: 'assets/images/timer.png'
        },

        {
            name: 'card7',
            img: 'assets/images/water_drop.png'
        },
        {
            name: 'card7',
            img: 'assets/images/water_drop.png'
        },

        {
            name: 'card8',
            img: 'assets/images/yoda.png'
        },
        {
            name: 'card8',
            img: 'assets/images/yoda.png'
        }

    ]
    
    /**
     * randomize order of cardDeck array
     */
     cardDeck.sort(() => 0.5 - Math.random())

    const gameBoard = document.getElementById('game_body')

    /**
     * Create game board out of cardDeck array
     */
    function callDeck() {
        for (let img in cardDeck) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/images/background.png')
            card.setAttribute('data-id', img)
            card.addEventListener('click', turnCard)
            gameBoard.appendChild(card)
        }
    }

    let pickedCard = []
    let pickedCardId = []

    /**
     * turn card function
     */

    function turnCard() {
        if (pickedCardId.length < 2) {
            var cardId = this.getAttribute('data-id')
            console.log(pickedCardId);
        }
        if (!pickedCardId.includes(cardId) && !cardScore.includes(cardId)) {
            pickedCard.push(cardDeck[cardId].name)
            pickedCardId.push(cardId)
            this.setAttribute('src', cardDeck[cardId].img)
        }
        if (pickedCard.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }


    let cardScore = []
    const scoreDisplay = document.getElementById('score')

    /**
     * function to check for match
     */
    function checkForMatch() {
        var cards = document.getElementsByTagName('img')
        const cardOneId = pickedCardId[0]
        const cardTwoId = pickedCardId[1]

        console.log("cardOneId:", cardOneId)
        console.log("cardOneId:", cardTwoId)

        const cardOne = pickedCard[0]
        const cardTwo = pickedCard[1]

        console.log("cardOne:", cardOne)
        console.log("cardTwo:", cardTwo)

    /**
     * if statement to check cards and load img accordingly
     */
        if(cardOne === cardTwo) {
            cards[cardOneId].setAttribute('src', 'assets/images/bw_heart.png')
            cards[cardTwoId].setAttribute('src', 'assets/images/bw_heart.png')
            cardScore.push(cardOneId)
            cardScore.push(cardTwoId)
        } else {
            cards[cardOneId].setAttribute('src', 'assets/images/background.png')
            cards[cardTwoId].setAttribute('src', 'assets/images/background.png')
        }  
    
        /**
         * add score inside card score and reset array length to run turnCard function again
         */
        scoreDisplay.textContent = cardScore.length
        pickedCard = []
        pickedCardId = []

    }




    callDeck()
    

})