import Argentina from '../countries/sa/argentina';
import Brazil from '../countries/sa/brazil';
import Peru from '../countries/sa/peru';
import Venezuela from '../countries/sa/venezuela';

export default function SouthAmerica({ selectCountry, selected }) {
  return <g id="South America" stroke="rgb(222,121,82)" fill="#E79273" visibility="visible">
          <Argentina callback={selectCountry} selected={selected}/>
          <Brazil callback={selectCountry} selected={selected}/>
          <Peru callback={selectCountry} selected={selected}/>
          <Venezuela callback={selectCountry} selected={selected}/>
        </g>;
}

