import Britian from '../countries/eu/britian';
import Iceland from '../countries/eu/iceland';
import NorthEurope from '../countries/eu/north';
import Scandinavia from '../countries/eu/scandinavia';
import SouthEurope from '../countries/eu/south';
import Ukraine from '../countries/eu/ukraine';
import WestEurope from '../countries/eu/west';

export default function Europe({ selectCountry, selected }) {
  return <g id="Europe" stroke="rgb(148,130,173)" fill="#CEBADE" visibility="visible">
          <Britian callback={selectCountry} selected={selected}/>
          <Iceland callback={selectCountry} selected={selected}/>
          <NorthEurope callback={selectCountry} selected={selected}/>
          <Scandinavia callback={selectCountry} selected={selected}/>
          <SouthEurope callback={selectCountry} selected={selected}/>
          <Ukraine callback={selectCountry} selected={selected}/>
          <WestEurope callback={selectCountry} selected={selected}/>
        </g>;
}

