import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import useWindowDimensions from './dimensions.js';
import useMousePosition from './useMousePosition';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewGame from './components/forms/new_game';
import ActiveGame from './components/forms/active_game';
import Board from './components/board';
import SelectCountries from './components/select_countries';
// import empires from './empires.json';

function App() {
  const coords = useMousePosition();
  const empires = [["Babylonian Empire","1792 BC[1][2]","626 BC","1166"],["Belgian colonial empire","1901","1962","61"],["Bengal Sultanate","1352","1576","224"],["Empire of Brazil","1822","1889","67"],["Britannic Empire","286","296","10"],["British Empire","1603","1997","394"],["British Raj","1858","1947","89"],["Bulgarian Empire (Great Bulgaria)","632","668","36"],["Caliphate of Córdoba","756","1031","275"],["Central African Empire","1976","1979","3"],["Congo Free State","1885","1908","23"],["Crimean Khanate","1441","1783","342"],["Danish colonial empire","1536","1953","417"],["Dutch Empire","1568","1975","407"],["Egyptian Empire","1550 BC","1077 BC","473"],["First French Empire","1804","1815","11"],["Second French Empire","1852","1870","18"],["French colonial empire","1534","1980","446"],["Frankish Empire","800","843","43"],["Gallic Empire","260","274","14"],["Gaza Empire","1824","1895","71"],["German Empire","1871","1918","47"],["Ghana Empire","300","1240","940"],["Han dynasty","206 BC","220","426"],["Holy Roman Empire","962","1806","844"],["Hunnic Empire","370","469","99"],["Kingdom of Israel (united monarchy)","1047 BC","930 BC","117"],["Kingdom of Judah (united monarchy)","1050 BC","586 BC","464"],["Inca Empire (Tawantinsuyo)","1438","1533","95"],["Italian Empire","1882","1947","65"],["Empire of Japan","1868","1947","79"],["Jin dynasty (266–420)","266","420","154"],["Jin dynasty (1115–1234)","1115","1234","119"],["Johor Empire","1528","1855","327"],["Jolof Empire","1350","1549","199"],["Kachari kingdom[3]","835","1832","997"],["Khmer Empire","802","1431","629"],["Kong Empire","1710","1898","188"],["Korean Empire","1897","1910","13"],["Kingdom of Kush","1070 BC","550","1620"],["Latin Empire","1204","1261","57"],["Macedonian Empire","334 BC","323 BC","11"],["First Mexican Empire","1821","1823","2"],["Second Mexican Empire","1864","1867","3"],["Ming dynasty","1368","1644","276"],["Mongol Empire","1206","1368","162"],["North Sea Empire","1016","1035","19"],["Ottoman Empire","1299","1922","623"],["Polish–Lithuanian Commonwealth","1569","1795","226"],["Portuguese Empire","1415","1999","584"],["Kingdom of Prussia","1701","1871","170"],["Qajar dynasty[citation needed]","1794","1925","131"],["Qing dynasty","1644","1912","268"],["Roman republic/Empire","509 BC","1453","1962"],["Eastern Roman Empire (Byzantine Empire)","395","1453","1123"],["Western Roman Empire","395","476","81"],["Russian Empire (Romanov)","1721","1917","196"],["Tsardom of Russia","1480","1721","241"],["Serbian Empire","1346","1371","25"],["Siam Empire","1782","1932","150"],["Sikh Empire","1733","1849","116"],["Spanish Empire","1479","1975","496"],["Swedish Empire","1611","1721","110"],["Empire of Thessalonica","1224","1246","22"],["Nazi Germany","1933","1945","12"],["Tibetan Empire","755","842","87"],["Zulu Empire","1818","1897","79"]];
  const rallies = ['Congo','EastAfrica','Egypt','Madagascar','SouthAfrica','NorthAfrica','Afganistan','China','India','Irkutsk','Japan','Kamchatka','MiddleEast','Mongolia','Siam','Siberia','Ural','Yakutsk','EastAustralia','WestAustralia','NewGuinea','Indonesia','GreatBritian','Iceland','NorthEurope','Scandinavia','SouthEurope','Ukraine','WestEurope','Alaska','Alberta','CentralAmerica','EastUS','Greenland', 'Northwest','Ontario','Quebec','WestUS','Argentina','Brazil','Peru','Venezuela'];
  
  const { height, width } = useWindowDimensions();
  const [ playCount, setPlayCount ] = useState(2); 
  const [ players, setPlayers ] = useState([]);

  const [ numberOfArmies, setNumberOfArmies ] = useState(0);
  
  const [ currentPlayer, setCurrentPlayer] = useState(0);
  const [ currentCountry, setCurrentCountry] = useState('');
  const [ countries, setCountries ] = useState({});
  const [ selections, setSelections ] = useState([]);;
  const [ setup, setupComplete ] = useState(false)
  const [ gameActive, setGameActive] = useState(false);  
  const [ deploy, setDeploy ] = useState(false);

  const board = useRef(0);

  const selectCountry = (e,country) => {
    if (!setup){
      if (Object.keys(countries).includes(country) || country == '--' || !players.length) return 0; 
      const owner = Object.keys(countries).length%players.length;
      countries[country] = {name: country, owner:owner,armies:1};
      
      setCountries(countries);
      selections[owner].push(country);
      setSelections(selections);

      if (e.target?.id) {
        e.target.classList.add('selected',`owner_${owner}`);
        alert(`Player ${owner+1} has selected ${country}`);
      } else {
        const e = board.current.getElementById(country);
        e.classList.add('selected', `owner_${owner}`);
      }
      setCurrentPlayer(owner+1 < players.length ? owner+1 : 0);
      if (!rallies.length){
        startDeploying(e);
      }
    }
    if(deploy){
      //we are deploying armies from the current player
      // to this country, does it belong to them?
      const isOwner = selections[currentPlayer].includes(country);
      if (isOwner){
        if(window.confirm(`Are you certain you want to put ${numberOfArmies}`)){
          countries[country].armies+=numberOfArmies;
          setNumberOfArmies(0);
          setCountries(countries);
        } else {
          debugger;  
        }
        setCurrentCountry(country);
      } else {
        debugger;
      }
    }
  };
  
  const usePlayerCount = useEffect((e) => {
    if (!selections.length && players.length){
      setSelections(Array(players.length).fill().map(() => Array()));
    }
  })

  const createGame = (p) => {
    setPlayCount(p);
    setPlayers(Array(parseInt(p)).fill().map(
      () => empires[Math.floor(Math.random() * empires.length)]
    ));
  }

  const startGame = (e) => {
    setupComplete(true);
    setGameActive(true);
    setCurrentPlayer(0)
  }

  const startDeploying = (e) => {
    setDeploy(true);
  }

  const deployArmies = (count) => {
    countries[currentCountry].armies += count; 
    setCountries(countries);
  }

  return (
    <Container>
      <Row>
        <Col>
          { playCount ? 
          <svg xmlns="http://www.w3.org/2000/svg"
            width={'100%'} height={'100%'}
            viewBox={`0 0 ${1024} ${792}`} 
            ref={board}>
            <Board selectCountry={selectCountry} countries={countries} />
          </svg>
           : <></> }
        </Col>
      </Row>
      <Row>
        <Col>
          { gameActive 
              ? <ActiveGame players={players} countries={countries} currentPlayer={currentPlayer} numberOfArmies={numberOfArmies} setNumberOfArmies={setNumberOfArmies} />
              : <NewGame playCount={playCount} setPlayCount={setPlayCount} createGame={createGame}/> }
          { players.length > 0 ?  
            <Col>
              <ol>
                { players.map((players, i) => <li key={i} className={i==currentPlayer ? 'current' : ''}><small className={`owner_${i}`}> &nbsp; </small> &nbsp; {players[0]} ({selections[i]? selections[i].length : 0}) countries</li>) }
              </ol>
              <SelectCountries players={players} rallies={rallies} countries={countries} setCountries={setCountries} selections={selections} setSelections={setSelections} selectCountry={selectCountry} startGame={startGame} />
            </Col>
           : <></> }
        </Col>
      </Row>
    </Container>

  );
}

export default App;