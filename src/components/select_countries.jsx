import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SelectCountries({ players, rallies, countries, setCountries, selections, setSelections, selectCountry, startGame }) {
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRandom = (e) => {
    let i=0;
    while (rallies.length > 0){
      const draw = Math.floor(Math.random()*rallies.length);
      const c = rallies.splice(draw,1);
      selectCountry(e,c[0])
      setShow(false);
    }
    startGame();
  }

  const continents = [
  	{ name: 'Africa', countries: ['Congo','EastAfrica','Egypt','Madagascar','SouthAfrica','NorthAfrica'] },
  	{ name: 'Asia', countries: ['Afganistan','China','India','Irkutsk','Japan','Kamchatka','MiddleEast','Mongolia','Siam','Siberia','Ural','Yakutsk'] },
  	{ name: 'Australia', countries: ['EastAustralia','WestAustralia','NewGuinea','Indonesia'] },
  	{ name: 'Europe', countries: ['GreatBritian','Iceland','NorthEurope','Scandinavia','SouthEurope','Ukraine','WestEurope'] },
  	{ name: 'NorthAmerica', countries: ['Alaska','Alberta','CentralAmerica','EastUS','Greenland', 'Northwest','Ontario','Quebec','WestUS'] },
  	{ name: 'SouthAmerica', countries: ['Argentina','Brazil','Peru','Venezuela'] }
  ];

  const [remaining, setRemaining] = useState(0);

  // debugger;

  return !show 
      ? <>
        <Row>
              {
                players.map((player,i) => <Col key={i}>
                  <small>{i+1}. <em>{player[0]}</em></small>
                  <ul>
                    {
                      selections[i] ? selections[i].map((c,j) => <li key={j}>{c} ({countries[c].armies})</li>) : <></>
                    }
                  </ul>
                </Col>)
              }
          </Row>
          
      </>
      : <form className='settings container' onSubmit={startGame}>
          <Row className="form-group">
            { (rallies.length != countries.length) 
              ? continents.map((c,i) => <Col key={i}>
                <label htmlFor="colFormLabelSm" className="col-form-label col-form-label-sm">
                    <select className="m-3 p-2" onChange={(e) => selectCountry(e,e.target.value)}>
                      <option key="--" value="--" className="col-12 p-3 m-2">{ c.name }</option>
                       { Object.keys(c.countries).map((country,j) => <option key={j} className="col-12 p-3 m-2" disabled={countries[country.name]===''} value={country.name}>{country.name}</option>) }
                    </select>
                ({ Object.keys(c.countries).filter( ( el ) => !c.countries[el] ).length })</label>
                </Col>)
              : <></>
            }
          </Row>
          <Row>
              {
                players.map((player,i) => <Col key={i}>
                  <small>{i+1}. <em>{player[0]}</em></small>
                  <ul>
                    {
                      selections[i] ? selections[i].map((c,j) => <li key={j}>{c}</li>) : <></>
                    }
                  </ul>
                </Col>)
              }
          </Row>
          <Row>
            <Col className="py-5 text-end">
              <Button variant="primary" onClick={handleShow}>Country Selection</Button> 
              <input type='submit' value='Next' className="btn btn-primary mx-3" />
              { (rallies.length != countries.length) 
                ? <Button variant="secondary" onClick={handleRandom}>
                    Random
                  </Button>
                : <></>
              }
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Col>
          </Row>
        </form>
}