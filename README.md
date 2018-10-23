# unit-4-game

RPG Game
HTML
1. h1 row - Name of game
2. p row to write instructions to, prefilled with span saying choose a character to begin
3. div row Available characters presented as cards. 
4. p row Your character text
5. div row Enemy row presented as cards
6. p row  Enemy text
7. div row Attack button, not enabled at first
8. div row Defender row presented as cards
9. p row Defender text
10. p row wih real time game play stats regarding healthPoints, attackPower, counterAttackPower

**character images to be setup on cards with stats in the border? - nice to have

Pseudo
1. Build HTML and CSS
2. Link bootstrap and Jquery
3. set up character variables for:
	a. healthPoints - can only be lowered, affected by attack function or counter attack subfunction
	b. attackPower - can only be raised, affected by attack or counter attack
	c. counterAttackPower - constant

4. Set up start  game function such that:
	a. start game function is triggered by user clicking on an available character 
	b. selected character stays in Your Character div
	c. unselected characters move to Enemies div, and
		i. change background color to red
	d. new text replaces instruction area saying to chose an opponent
	e. stats div shows who was chosen, as well as stats
	f. function ends when your character health points <=0 or when all all enemies defeated

5. Set up a battle function such that:
	a. battle function is triggered by user clicking on an enemy
	b. moves selected enemy into defender div, and 
		i. changes background color to black
	c. attack button becomes enabled
	d. stats div shows who is defender, as well as stats
	c. attack button triggers attack function
	e. battle function repeats until no enemies remain 
	f. new text replaces instruction area saying click attack to attack   

6. set up a function for attacking that can apply to any chosen character and defender such that:
	a. attack function is triggered by clicking the attack button
	b. attack function removes health points from defender 
	c. attack power increases base attack level after each attack
	d. stats div shows attack effects
	f. at end of each attack function, check for enemy health points and, 
		i. if <=0, remove character from html and check, 
			a. if remaining enemies > 0 restart battle function
			b. else restart battle function
	 	ii. else attack function triggers counter attack function

7. setup a function for counter attacking, done by the defender, in reaction to any attack, such that:
	a. counter attack function is triggered by end of attack function
	b. counter attack function removes health points from your character
	c. stats div shows counter attack effects
	d. at end of each counter attack function, check for your character health points and, 
		i. if <=0, g
			b. instructions div shows game over and to chose a new character to begin
            c. stop functions and reset game
		ii. else counter attack function ends until user presses attack button and, 
            a. new text replaces instruction area saying click attack to attack   