import EastAustrailia from '../countries/au/east';
import NewGuinea from '../countries/au/guinea';
import WestAustrailia from '../countries/au/west';
import Indonesia from '../countries/au/indonesia';

export default function Austrailia({ selectCountry, selected }) {
  return <g id="Austrailia" stroke="rgb(214,81,99)" fill="#E78A94" visibility="visible">
          <EastAustrailia callback={selectCountry} selected={selectCountry}/>
          <NewGuinea callback={selectCountry} selected={selectCountry}/>
          <WestAustrailia callback={selectCountry} selected={selectCountry}/>
          <Indonesia callback={selectCountry} selected={selectCountry}/>
        </g>;
}

