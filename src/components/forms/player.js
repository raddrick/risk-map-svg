import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Player({player, selected, owner, countries, deployArmies, setDeploymentArmies}) {
  const [armies, setArmies] = useState(0);

  const prepareArmies = useEffect((e) => {
  	if (!armies && deployArmies){
  		setDeploymentArmies(armies - deployArmies);
  		setArmies(armies + deployArmies);
  	}
  })

  return <>
            <form className={`deploy new armies bg-light${selected ? ' selected' : ' disabled' }`}>
              <h4><small className={`owner_${owner}`}> &nbsp; </small> &nbsp; {player[0]}</h4>
              <label>
                <input 
                	name='armies' 
                	className='armies col-2' 
                	type='number' 
                	min="1" 
                	max={armies} 
                	value={1} 
                	onChange={(e)=>{console.log(e.value);setArmies(e.value > armies ? e.value : armies)}} disabled={ !selected ? 'disabled' : '' }/> Deploy Armies ({armies})
              </label>
              { selected ? <small><strong>Its your turn</strong>: Please deploy your troops</small> : <></> }
            </form>
        </>
}