document.addEventListener('DOMContentLoaded', () => {

    const startGame = document.getElementById('card_deck_1');
    startGame.addEventListener('click', callDeck);
    startGame.addEventListener('click', hideStartGame);

    function hideStartGame() {
        document.getElementById('deck_choice').style.display = 'none'; 
    }

    // Memory game deck options
    const cardDeck = [{
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

    ];

    /**
     * randomize order of cardDeck array
     */
    cardDeck.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById('game_body');

    /**
     * Create game board out of cardDeck array
     */
    function callDeck() {
        for (let img in cardDeck) {
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/background.png');
            card.setAttribute('data-id', img);
            card.classList.add('card_styling');
            card.addEventListener('click', turnCard);
            gameBoard.appendChild(card);
        }
    }

    /**
     * variables declared to push in picked cards
     */
    let pickedCard = [];
    let pickedCardId = [];

    /**
     * turn card function
     */

    function turnCard() {
        if (pickedCardId.length < 2) {
            var cardId = this.getAttribute('data-id');
            console.log(pickedCardId);
        }
        if (!pickedCardId.includes(cardId) && !cardScore.includes(cardId)) {
            pickedCard.push(cardDeck[cardId].name);
            pickedCardId.push(cardId);
            this.setAttribute('src', cardDeck[cardId].img);
        }
        if (pickedCard.length === 2) {
            setTimeout(checkForMatch, 500);
        }

    }

    /**
     * variable to push in correct cards found
     */
    let cardScore = [];
    const scoreDisplay = document.getElementById('score');

    /**
     * function to check for match
     */
    function checkForMatch() {
        var cards = document.getElementsByTagName('img');
        const cardOneId = pickedCardId[0];
        const cardTwoId = pickedCardId[1];

        console.log("cardOneId:", cardOneId);
        console.log("cardOneId:", cardTwoId);

        const cardOne = pickedCard[0];
        const cardTwo = pickedCard[1];

        console.log("cardOne:", cardOne);
        console.log("cardTwo:", cardTwo);

        /**
         * if statement to check cards and load img accordingly
         */
        if (cardOne === cardTwo) {
            cards[cardOneId].setAttribute('src', 'assets/images/bw_backgroound.png');
            cards[cardTwoId].setAttribute('src', 'assets/images/bw_backgroound.png');
            cardScore.push(cardOneId);
            cardScore.push(cardTwoId);
        } else {
            cards[cardOneId].setAttribute('src', 'assets/images/background.png');
            cards[cardTwoId].setAttribute('src', 'assets/images/background.png');
        }

        /**
         * add score inside card score and reset array length to run turnCard function again. Reset pickedCard and pickedCardId to empty array
         */
        scoreDisplay.textContent = cardScore.length;
        pickedCard = [];
        pickedCardId = [];

        incrementAttempts();

        /**
         * read what text is displayed inside attempts, return as a number for endGame to trigger
         */
        let attempts = parseInt(document.getElementById('attempts').innerText);

        /**
         * When game is done. Hide game board
         */
        if (cardScore.length === 16 || attempts === 20) {
            document.getElementById('game_body').style.display = 'none';

            if (attempts === 20) {
                alert('You lost :( Game Over!');
                body = document.getElementById('call_for_reload');
                body.setAttribute('style', 'background-color: #9e2a2b;');
            } else {
                alert('Congrats!!! You Won!');
                body = document.getElementById('call_for_reload');
                body.setAttribute('style', 'background-color: #aaf683;');
            }
            /**
             * creates button element with styling in html element that refreshes page when clicked
             */
            var newGame = document.createElement('button');
            newGame.classList.add("new_game_button");
            newGame.setAttribute(
                'style',
                'height: 100px; width: 100px; background-color: black; color: white; font-size: 25px; margin-top: 10%; border-radius: 10%; font-family: Share Tech Mono, monospace; box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);'
            );
            newGame.innerHTML = "New Game";
            var body = document.getElementById('call_for_reload');
            body.appendChild(newGame);
            newGame.addEventListener('click', refreshPage);

        }

    }
    /**
     * function to refresh page and trigger new game
     */
    function refreshPage() {
        window.location.reload();
    }

    /**
     * function to incement amount of attempts and update for each "checkForMatch()" that's run, onto html id="attempts"
     */
    function incrementAttempts() {
        let oldAttempts = parseInt(document.getElementById('attempts').innerText);
        document.getElementById('attempts').innerText = ++oldAttempts;
    }


});