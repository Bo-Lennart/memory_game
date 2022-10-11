document.addEventListener('DOMContentLoaded', () => {

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
    /** heartPixel CARD DECK */
    const cardDeck2 = [{
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
        },

        {
            name: 'card9',
            img: 'assets/images/level_3/letter_y.png'
        },
        {
            name: 'card9',
            img: 'assets/images/level_3/letter_y.png'
        },

        {
            name: 'card10',
            img: 'assets/images/level_3/letter_b.png'
        },
        {
            name: 'card10',
            img: 'assets/images/level_3/letter_b.png'
        }

    ];
    /**
     * Robot card deck */
    const cardDeck3 = [{
            name: 'card1',
            img: 'assets/images/level_3/letter_a.png'
        },
        {
            name: 'card1',
            img: 'assets/images/level_3/letter_a.png'
        },

        {
            name: 'card2',
            img: 'assets/images/level_3/letter_b.png'

        },
        {
            name: 'card2',
            img: 'assets/images/level_3/letter_b.png'

        },

        {
            name: 'card3',
            img: 'assets/images/level_3/letter_h.png'
        },
        {
            name: 'card3',
            img: 'assets/images/level_3/letter_h.png'
        },

        {
            name: 'card4',
            img: 'assets/images/level_3/letter_i.png'
        },
        {
            name: 'card4',
            img: 'assets/images/level_3/letter_i.png'
        },

        {
            name: 'card5',
            img: 'assets/images/level_3/letter_j.png'
        },
        {
            name: 'card5',
            img: 'assets/images/level_3/letter_j.png'
        },

        {
            name: 'card6',
            img: 'assets/images/level_3/letter_t.png'
        },
        {
            name: 'card6',
            img: 'assets/images/level_3/letter_t.png'
        },

        {
            name: 'card7',
            img: 'assets/images/level_3/letter_y.png'
        },
        {
            name: 'card7',
            img: 'assets/images/level_3/letter_y.png'
        },

        {
            name: 'card8',
            img: 'assets/images/level_3/letter_z.png'
        },
        {
            name: 'card8',
            img: 'assets/images/level_3/letter_z.png'
        },

        {
            name: 'card9',
            img: 'assets/images/level_3/letter_w.png'
        },
        {
            name: 'card9',
            img: 'assets/images/level_3/letter_w.png'
        },

        {
            name: 'card10',
            img: 'assets/images/level_3/letter_low_case_v.png'
        },
        {
            name: 'card10',
            img: 'assets/images/level_3/letter_low_case_v.png'
        },

        {
            name: 'card11',
            img: 'assets/images/level_3/letter_o.png'
        },
        {
            name: 'card11',
            img: 'assets/images/level_3/letter_o.png'
        },

        {
            name: 'card12',
            img: 'assets/images/level_3/letter_w.png'
        },
        {
            name: 'card12',
            img: 'assets/images/level_3/letter_w.png'
        }

    ];

    /**
     * variables declared to push in picked cards
     */
    let pickedCard = [];
    let pickedCardId = [];

    /**
     * variable to push in correct cards found
     */
    let cardScore = [];
    const scoreDisplay = document.getElementById('score');

    /**
     * randomize order of cardDeck array
     */
    cardDeck.sort(() => 0.5 - Math.random());
    cardDeck2.sort(() => 0.5 - Math.random());
    cardDeck3.sort(() => 0.5 - Math.random());
    const gameBoard = document.getElementById('game_body');

    /**
     * click to trigger the different card decks
     */
    let deck_1 = document.getElementById('card_deck_1');
    let deck_2 = document.getElementById('card_deck_2');
    let deck_3 = document.getElementById('card_deck_3');

    deck_1.addEventListener('click', callDeck);
    deck_2.addEventListener('click', callDeck2);
    deck_3.addEventListener('click', callDeck3);

    /**
     * function to hide deck choice
     */
    function hideStartGame() {
        document.getElementById('deck_choice').style.display = 'none';
    }

    /**
     * Create game board out of cardDeck array
     */
    function callDeck() {
        for (let img in cardDeck) {
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/brew.png');
            card.setAttribute('data-id', img);
            card.classList.add('card_styling');
            card.addEventListener('click', turnCard);
            gameBoard.appendChild(card);
        }
        hideStartGame()
        deckType = 'brew';
    }

    function callDeck2() {
        for (let img in cardDeck2) {
            var card2 = document.createElement('img');
            card2.setAttribute('src', 'assets/images/heart.png');
            card2.setAttribute('data-id', img);
            card2.classList.add('card_styling');
            card2.addEventListener('click', turnCard2);
            gameBoard.appendChild(card2);
        }
        hideStartGame()
        deckType = 'heartPixel';
    }

    function callDeck3() {
        for (let img in cardDeck3) {
            var card3 = document.createElement('img');
            card3.setAttribute('src', 'assets/images/background.png');
            card3.setAttribute('data-id', img);
            card3.classList.add('card_styling');
            card3.addEventListener('click', turnCard3);
            gameBoard.appendChild(card3);
        }
        hideStartGame()
        deckType = 'robot';
    }

    /**
     * turn card functions for the different deck level difficulties
     */

    function turnCard() {
        if (pickedCardId.length < 2) {
            var cardId = this.getAttribute('data-id');
            console.log(cardId);
        }
        if (!pickedCardId.includes(cardId) && !cardScore.includes(cardId)) {
            pickedCard.push(cardDeck[cardId].name);
            pickedCardId.push(cardId);
            this.setAttribute('src', cardDeck[cardId].img);
        }

        if (pickedCard.length === 2) {
            setTimeout(checkForMatch, 700);
        }

    }

    function turnCard2() {
        if (pickedCardId.length < 2) {
            var cardId = this.getAttribute('data-id');
            console.log(cardId);
        }
        if (!pickedCardId.includes(cardId) && !cardScore.includes(cardId)) {
            pickedCard.push(cardDeck2[cardId].name);
            pickedCardId.push(cardId);
            this.setAttribute('src', cardDeck2[cardId].img);
        }

        if (pickedCard.length === 2) {
            setTimeout(checkForMatch, 700);
        }

    }

    function turnCard3() {
        if (pickedCardId.length < 2) {
            var cardId = this.getAttribute('data-id');
            console.log(cardId);
        }
        if (!pickedCardId.includes(cardId) && !cardScore.includes(cardId)) {
            pickedCard.push(cardDeck3[cardId].name);
            pickedCardId.push(cardId);
            this.setAttribute('src', cardDeck3[cardId].img);
        }

        if (pickedCard.length === 2) {
            setTimeout(checkForMatch, 700);
        }

    }

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

        var deckSize;
        /**
         * if statement to check cards and load img accordingly for brew deck
         */

        if (deckType === "brew") {
            setBackgroundOnCard('assets/images/bw_brew.png', 'assets/images/brew.png');
            deckSize = cardDeck.length;
        } else if (deckType === "heartPixel") {
            setBackgroundOnCard('assets/images/bw_heart.png', 'assets/images/heart.png');
            deckSize = cardDeck2.length;
        } else if (deckType === "robot") {
            setBackgroundOnCard('assets/images/bw_background.png', 'assets/images/background.png');
            deckSize = cardDeck3.length;
        }

        console.log(deckType)

        /**
         * Function to check if card is a match and sett correct background accordingly
         */
        function setBackgroundOnCard(cardBackground, foundCardBackground) {
            if (cardOne === cardTwo) {
                cards[cardOneId].setAttribute('src', cardBackground);
                cards[cardTwoId].setAttribute('src', cardBackground);
                cardScore.push(cardOneId);
                cardScore.push(cardTwoId);
            } else {
                cards[cardOneId].setAttribute('src', foundCardBackground);
                cards[cardTwoId].setAttribute('src', foundCardBackground);
            }

        }

        /**
         * add score inside card score and reset array length to run turnCard function again. Reset pickedCard and pickedCardId to empty array
         */
        scoreDisplay.textContent = cardScore.length;
        pickedCard = [];
        pickedCardId = [];

        /**
         * failScore to calculate sum of deckSize left in order to trigger end game if to little attempts left
         */
        failScore = (deckSize - cardScore.length)/2;
        console.log(cardScore.length);

        incrementAttempts();

        /**
         * read what text is displayed inside attempts, return as a number for endGame to trigger
         */
        let attempts = parseInt(document.getElementById('attempts').innerText);

        /**
         * When game is done. Hide game board
         */
        if (cardScore.length === deckSize || attempts === 20 || failScore + attempts === 20) {
            document.getElementById('game_body').style.display = 'none';

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
            var body = document.getElementById('rules');
            body.appendChild(newGame);
            newGame.addEventListener('click', refreshPage);

            if (attempts === 20 || failScore + attempts === 20) {
                body = document.getElementById('rules');
                body.setAttribute('style', 'background-color: #9e2a2b;');
                var loser = document.createElement('h2');
                body.appendChild(loser);
                loser.innerHTML = "You LOST!"

            } else {
                body = document.getElementById('rules');
                body.setAttribute('style', 'background-color: rgb(145, 235, 137);');
                var loser = document.createElement('h2');
                body.appendChild(loser);
                loser.innerHTML = "You WON!! CONGRATS!"
            }

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