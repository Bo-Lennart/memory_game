# Memory Game - Portfolio project 2 - JavaScript

Memory Game is an interactive online home page where the use can play a simple card memory game, three levels with 20 tries to find all pairs.

You can access the site here: <a href="https://bo-lennart.github.io/memory_game/" target="_blank">Memory Game Page</a>

![IMAGE ALT TEXT HERE](../docs/screenshots/responsive.png)

# Contents

- [Project Goals](#project-goals)
- [UX User Experience](#ux-user-eperience)
    - [Site Aims](#site-aims)
    - [User Stories](#user-stories)
    - [Color Scheme](#color-scheme)
- [Features](#features)
    - [Landing Page](#landing-page)
    - [Game Page](#game-page)
    - [Difficulty Levels](#difficulty-levels)
    - [Game Over](#game-over)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
    - [Code Validation](#code-validation)
    - [Bugs](#bugs)
    - [Validator Testing](#validator-testing)
- [Deployment](#deployment)
    - [Deploy to GitHub Pages](#deploy-to-github-pages)
    - [To Fork the Repository](#to-fork-the-repository)
    - [To create a Local Clone](#to-create-a-local-clone)
- [Credits](#credits)
    - [Content](#content)
    - [Media](#media)

# Project Goals

The aim of this project is to deliver an interactive game that is pleasing visually and functional for the user to play a memory game.

# UX User Experience 

## Site Aims
* To provide a simple interactive memory game with three levels of difficulty.
* To create a system that challenges the use to replay and have a goal to clear all three difficulty levels.
* To provide full responsive design in order to be able to play the game from different devices, such as, mobile phone, tablets or desktop screens.
* To provide an easy, understandable interactive experience for the use to navigate through the game.
* To provide a challenging game that is enjoyable but still challengning so the use can return to try the different levels.

## User Stories

The **user** is any person who likes simple, digital games.

| ID | ROLE | ACTION | |
|-----------------|:-------------|:---------------:|:---------------:|
| 1 | User | As a user, I want to be able to play memory | So I can have some fun|
| 2 | User | As a user, I want to be able to play the game across different devices | So I can access to game on the go and at home |
| 3 | User | As a user, I want the option of increased difficulty | So it's fun yet challenging |
| 4 | User | As a user, I want to be able to start the game when I am ready | So I can mentally prepare for the challenge |
| 5 | User | As a user, I want to be able to know how many cards I have found | So I know how much is left for me to find |
| 6 | User | As a user, I want to be able to start a new game when the current one ends | So I can try the challenge again or go to the next level |
| 7 | User | As a user, I want the game to end when I have to little tries left to win the level | So I don't have to spend time on a doomed try |

## Color Scheme

The color palette is inspired of a playfulness in order to match the pixel figures that are placed on the background. The theme of the memory game is "pixels" and therefore all the cards have a pixel-figure styled layout.

![IMAGE ALT TEXT HERE](../docs/screenshots/color_palette.png)
![IMAGE ALT TEXT HERE](../docs/screenshots/pixel_figures.png)

# Features

## Landing Page

1. At the top of the page the user finds a score count of how many cards they've found as well as how many attempts they've had.

2. Below the score counts a small box is presented with a few rules, followed by a heading that asks the user to choos a deck in order to start the game.

3. On each deck, the user finds a level combined with the colors: green, orange and red to present the difficulty levels. 

4. The landing page finishes off with a short text about what potential cognitive benefits it could have to play memory followed by the footer with social links.

![IMAGE ALT TEXT HERE](../docs/screenshots/landing_page.png)

## Game Page

Each difficulty level is based on the same functionality. 
In the background of the page there are functions that count the attempts, how many cards founds, checks for matches, turn cards, display the correct images and checks if the game is to be interupted with game over or a win. A time out inside the turnCard-/2/3 function is added for the user so that they get a chance to memorise what cards they have turned.

## Difficulty Levels

The difficulty increases in terms of the amount of cards as well as the type of cards displayed. All decks have 20 tries to win.
1. Brew Deck: 16 cards with only pixel pictures.
2. Heart Deck: 20 cards with pixel pictures and alphabetical letters.
3. Robot Deck: 24 cards with only letters in black. 

| Pixel Deck | Amount of Cards | Failed Attempts Allowed | lvl |
|-----------------|:-------------|:---------------:|:---------------:|
| Brew | 16 | 12 | lvl 1 |
| Heart | 20 | 10 | lvl 2 |
| Robot | 24 | 8 | lvl 3 |

![IMAGE ALT TEXT HERE](../docs/screenshots/deck_types.png)

## Game Over

When the game is finnished the user is directed to the game over screen. Depending on if the user wins or loses the screen will either display a green box with 'You won' text or a red box with 'You lost' text. 

![IMAGE ALT TEXT HERE](../docs/screenshots/game_over_screen.png)

# Technologies Used

* HTML5 - Site structure and content
* CSS3 - Styling
* JavaScript - Site functionality, styling and logic.
* Adobe Photoshop - Edit images and backgrounds
* Gitpod
* GitHub
* Google Chrome DevTools - Used to debug, testing and try out css styling for screen responsiveness

# Testing

## Code Validation

This memory game has been tested through W3C HTML and W3C CSS validator. Minor errors where spotted and immediately corrected. These are documented below in [Bugs](#bugs)

![IMAGE ALT TEXT HERE](../docs/screenshots/w3c_validator.png)

![IMAGE ALT TEXT HERE](../docs/screenshots/css_validator.png)

The Javascript file was validated with JSHint. There were warnings such as: couple of undefined varibles, missing semicolons and that bodies of 'for ins' should be wrappet inside if-statements. These have been taken care of and JSHint has come up clean.

![IMAGE ALT TEXT HERE](../docs/screenshots/jshint_testing.png)
