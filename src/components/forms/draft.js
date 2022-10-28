import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Player({players, currentPlayer, countries}) {
  const [ armies, setArmies ] = useState([]);
  const [ reinforce, setReinforce ] = useState([]);

  return <>

            <form className='settings'>
              <label>Number of players &nbsp;
                  <input name='playCount' className='playCount' type='number' min="2" max="6" value={} onChange=''/>
              </label>
              <input type='submit' value='Next' className="btn btn-primary" />
            </form>
        </>
}