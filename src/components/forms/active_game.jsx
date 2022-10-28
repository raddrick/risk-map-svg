import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Player from './player';


export default function ActiveGame({players, countries, currentPlayer, numberOfArmies, setNumberOfArmies }) {
	const [ numberOfPlayers, setNumberOfPlayers ] = useState(0);
	
	const [ start, setStart ] = useState(true);
	const [ reinforce, setReinforce ] = useState(false);
  
	const useSetup = useEffect(() => {
		if (!numberOfPlayers) {
			setNumberOfPlayers(players.length);
			switch(numberOfPlayers){
				case 6:
					setNumberOfArmies(20);
					break
				case 5:
					setNumberOfArmies(25);
					break
				case 4:
					setNumberOfArmies(30);
					break
				case 3:
					setNumberOfArmies(35);
					break
				default:
					setNumberOfArmies(35);
			}

		}
	});


	// min 3 players
	// if 2 players, create UN
	// if 3, each player 35
	// if 4, each player 30
	// if 5, each player 25
	// if 6, each player 20

	// countries.length / 3, min 3

	// cards trade in
	// 4, 6, 8, 10, 12, 15, +5

    return <>
            { players.map((player, i) => <Player player={player} countries={countries} deployArmies={numberOfArmies} setDeploymentArmies={setNumberOfArmies} selected={currentPlayer==i} owner={i} key={i} _armies={numberOfArmies} _setArmies={setNumberOfArmies} /> ) }
        </>
}