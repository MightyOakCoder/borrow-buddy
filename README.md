# Borrow Buddy 
[Wireframe-Screenshot.png](https://postimg.cc/CnpkqS4F)

In this first project for the GA SEI course, I've chosen Memory, aka Concentration. This is a card game in which all of the cards are laid face down and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.

My second GA SEI project is called Borrow Buddy. I wanted to create an application that will allow friends to borrow household items from one another. How many times have we all had a use for a certain item, but only need it for a one-off project, or a small amount of time? What if you could just borrow that item from a friend? If you didn't have the space or the need for a miter saw year round, but a friend already owned one, you could just request to borrow it!

## List of Technologies Used:
- HTML
- CSS
- JavaScript
- Node
- MongoDB (Atlas)
- Mongoose
- Canva

## Wireframe
https://www.figma.com/community/file/1182075554291730122

## Getting Started
Access at: https://beckyweeks14.github.io/Memory/
- Note: If you do not have a match, wait for the board to reset before trying another set of cards


## Trello
https://trello.com/b/AacgXy0O/project-2-borrow-buddy



## Win/Loss Screenshots:
![HCyKTPa.png](https://iili.io/HCyKTPa.png) ![HCyqHrb.png](https://iili.io/HCyqHrb.png)
## MVP Goals:
- There are 12 cards displayed face down
- There are 6 different pairs of matching cards
- When a card selected it will “flip over” to the face of the card
- 2 cards can be selected at a time
- Determine if the 2 selected cards are a match
- Guess counter resets after 2 selections, unless cards match
- Turn counts (2 clicks) are kept track
- Matches are kept track 
- If 6 matches are made in less than 10 clicks, you have a win,
  otherwise it is a loss
- A New Game button is displayed to start a new game

## Unsolved Problems: 
- Currently if I click outside of the game board, it also registers clicks
- Randomize the face of the cards on refresh 

## Icebox (Planned Future Enhancements):
- Adding @media CSS so it looks clean on both mobile and desktop
- Disabling clicks after 10 clicks
