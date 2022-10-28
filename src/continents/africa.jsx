import EastAfrica from '../countries/af/east';
import SouthAfrica from '../countries/af/south';
import NorthAfrica from '../countries/af/north';
import Egypt from '../countries/af/egypt';
import Congo from '../countries/af/congo';
import Madagascar from '../countries/af/madagascar';

export default function Africa({ selectCountry, countries }) {
  return <g id="Africa" stroke="rgb(198,138,49)" fill="#CEA252" visibility="visible">
	      <EastAfrica callback={selectCountry} country={countries['EastAfrica']} />
	      <Egypt callback={selectCountry} country={countries['Egypt']} />
	      <Congo callback={selectCountry} country={countries['Congo']} />
	      <Madagascar callback={selectCountry} country={countries['Madagascar']} />
	      <SouthAfrica callback={selectCountry} country={countries['SouthAfrica']} />
	      <NorthAfrica callback={selectCountry} country={countries['NorthAfrica']} />
	    </g>;
}

