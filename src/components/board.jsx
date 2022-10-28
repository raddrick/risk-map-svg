import Seas from '../continents/seas';
import Africa from '../continents/africa';
import Asia from '../continents/asia';
import Austrailia from '../continents/austrailia';
import Europe from '../continents/europe';
import NorthAmeria from '../continents/north_america';
import SouthAmeria from '../continents/south_america';

export default function Board({ selectCountry, countries }) {

  return <g id="map" fill="none" strokeWidth="1.5">
        <Seas selectCountry={ selectCountry } countries={ countries } />
        <Africa selectCountry={ selectCountry } countries={ countries } />
        <Asia selectCountry={ selectCountry } countries={ countries } />
        <Austrailia selectCountry={ selectCountry } countries={ countries } />
        <Europe selectCountry={ selectCountry } countries={ countries } />
        <NorthAmeria selectCountry={ selectCountry } countries={ countries } />
        <SouthAmeria selectCountry={ selectCountry } countries={ countries } />
      </g>;
}

