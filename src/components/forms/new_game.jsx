import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function NewGame({createGame}) {
  const [show, setShow] = useState(true);
  const [players, setPlayers] = useState(2);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newGame = (e) => {
    e.preventDefault();
    setShow(false);
    createGame(players);
  }
  
  return <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>RaddRisk</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome! Lets play a game</Modal.Body>
          <Modal.Footer>
            <form className='settings' onSubmit={newGame}>
              <label>Number of players &nbsp;
                <input name='playCount' className='playCount' type='number' min="2" max="6" value={players} onChange={(e) => setPlayers(e.currentTarget.value)}/>
              </label>
              <input type='submit' value='Next' className="btn btn-primary" />
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </form>
          </Modal.Footer>
        </Modal>

        { !show ? <Button variant="primary" onClick={handleShow}>Start New Game</Button> : <></> }
        </>
}