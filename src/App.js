import logo from './logo.svg';
import './App.css';
import useWindowDimensions from './dimensions.js'

import Mediterranean from './seas/mediterranean'
import DeadSea from './seas/dead'
import BlackSea from './seas/black'
import GreatLakes from './seas/great'

import EastAfrica from './countries/af/east'
import SouthAfrica from './countries/af/south'
import NorthAfrica from './countries/af/north'
import Egypt from './countries/af/egypt'
import Congo from './countries/af/congo'
import Madagascar from './countries/af/madagascar'

import Afganistan from './countries/as/afganistan';
import India from './countries/as/india';
import China from './countries/as/china';
import Irkutsk from './countries/as/irkutsk';
import Japan from './countries/as/japan';
import Kamchatka from './countries/as/kamchatka';
import MiddleEast from './countries/as/middle';
import Mongolia from './countries/as/mongolia';
import Siam from './countries/as/siam';
import Siberia from './countries/as/siberia';
import Ural from './countries/as/ural';
import Yakutsk from './countries/as/yakutsk';


import EasternAustrailia from './countries/au/eastern';
import NewGuinea from './countries/au/guinea';
import WesternAustrailia from './countries/au/western';
import Indonesia from './countries/au/indonesia';
import Britian from './countries/eu/britian';
import Iceland from './countries/eu/iceland';
import NorthernEurope from './countries/eu/northern';
import Scandinavia from './countries/eu/scandinavia';
import SouthernEurope from './countries/eu/southern';
import Ukraine from './countries/eu/ukraine';
import WesternEurope from './countries/eu/western';
import Alaska from './countries/na/alaska';
import Alberta from './countries/na/alberta';
import CentralAmerica from './countries/na/central';
import EasternAmerica from './countries/na/eastern';
import Greenland from './countries/na/greenland';
import Northwest from './countries/na/northwest';
import Ontario from './countries/na/ontario';
import WesternAmerica from './countries/na/western';
import Quebec from './countries/na/quebec';
import Argentina from './countries/sa/argentina';
import Brazil from './countries/sa/brazil';
import Peru from './countries/sa/peru';
import Venezuela from './countries/sa/venezuela';

function App() {

  const { height, width } = useWindowDimensions();


  return (
    <svg xmlns="http://www.w3.org/2000/svg"
          width="100%" height="100%"
          viewBox="0 0 1024 792">
      <g id="map" fill="none" strokeWidth="1.5">
        <g id="Seas" fill="#FFFFFF">
          <path className='sea' id="Mediterranean" d={Mediterranean()}/>
          <path className='sea' id="Dead Sea"  d={DeadSea()}/>
          <path className='sea' id="Black Sea"  d={BlackSea()}/>
          <path className='sea' id="Great Lakes"  d={GreatLakes()}/>
        </g>
        <g id="Africa" stroke="rgb(198,138,49)" fill="#CEA252" visibility="visible">
          <path className='country' id="East Africa" d={EastAfrica()}/>
          <path className='country' id="Egypt" d={Egypt()}/>
          <path className='country' id="Congo" d={Congo()}/>
          <path className='country' id="Madagascar" d={Madagascar()}/>
          <path className='country' id="South Africa" d={SouthAfrica()}/>
          <path className='country' id="North Africa" d={NorthAfrica()}/>
        </g>
        <g id="Asia" stroke="rgb(156,195,90)" fill="#BDDB8C" visibility="visible">
          <path className='country' id="Afghanistan" d={Afganistan()}/>
          <path className='country' id="India" d={India()}/>
          <path className='country' id="Irkutsk" d={Irkutsk()}/>
          <path className='country' id="Kamchatka" d={Kamchatka()}/>
          <path className='country' id="Middle East" d={MiddleEast()}/>
          <path className='country' id="Mongolia" d={Mongolia()}/>
          <path className='country' id="Siam" d={Siam()}/>
          <path className='country' id="China" d={China()}/>
          <path className='country' id="Japan" d={Japan()}/>
          <path className='country' id="Siberia" d={Siberia()}/>
          <path className='country' id="Ural" d={Ural()}/>
          <path className='country' id="Yakutsk" d={Yakutsk()}/>
        </g>
        <g id="Austrailia" stroke="rgb(214,81,99)" fill="#E78A94" visibility="visible">
          <path className='country' id="Eastern Austrailia" d={EasternAustrailia()}/>
          <path className='country' id="New Guniea" d={NewGuinea()}/>
          <path className='country' id="Western Austrailia" d={WesternAustrailia()}/>
          <path className='country' id="Indonesia" d={Indonesia()}/>
        </g>
        <g id="Europe" stroke="rgb(148,130,173)" fill="#CEBADE" visibility="visible">
          <path className='country' id="Great Britain" d={Britian()}/>
          <path className='country' id="Iceland" d={Iceland()}/>
          <path className='country' id="Northern Europe" d={NorthernEurope()}/>
          <path className='country' id="Scandinavia" d={Scandinavia()}/>
          <path className='country' id="Southern Europe" d={SouthernEurope()}/>
          <path className='country' id="Ukraine" d={Ukraine()}/>
          <path className='country' id="Western Europe" d={WesternEurope()}/>
        </g>
        <g id="North America" stroke="rgb(201,155,50)" fill="#EFCB73" visibility="visible">
          <path className='country' id="Alaska"  d={Alaska()}/>
          <path className='country' id="Alberta"  d={Alberta()}/>
          <path className='country' id="Central America" d={CentralAmerica()}/>
          <path className='country' id="Eastern United States" d={EasternAmerica()}/>
          <path className='country' id="Greenland"  d={Greenland()}/>
          <path className='country' id="Northwest Territory" d={Northwest()}/>
          <path className='country' id="Ontario"  d={Ontario()}/>
          <path className='country' id="Western United States" d={WesternAmerica()}/>
          <path className='country' id="Quebec"  d={Quebec()}/>
        </g>

        <g id="South America" stroke="rgb(222,121,82)" fill="#E79273" visibility="visible">
          <path className='country' id="Argentina" d={Argentina()} />
          <path className='country' id="Brazil" d={Brazil()}/>
          <path className='country' id="Peru" d={Peru()}/>
          <path className='country' id="Venezuela" d={Venezuela()}/>
        </g>
      </g>
      <path id="hilite" fill="white" strokeWidth="8" stroke="black" opacity="0.3"/>
    </svg>
  );
}

export default App;

