import Afghanistan from '../countries/as/afganistan';
import India from '../countries/as/india';
import China from '../countries/as/china';
import Irkutsk from '../countries/as/irkutsk';
import Japan from '../countries/as/japan';
import Kamchatka from '../countries/as/kamchatka';
import MiddleEast from '../countries/as/middle';
import Mongolia from '../countries/as/mongolia';
import Siam from '../countries/as/siam';
import Siberia from '../countries/as/siberia';
import Ural from '../countries/as/ural';
import Yakutsk from '../countries/as/yakutsk';

export default function asia({ selectCountry, selected }) {
  return <g id="Asia" stroke="rgb(156,195,90)" fill="#BDDB8C" visibility="visible">
          <Afghanistan callback={selectCountry} selected={selected}/>
          <India callback={selectCountry} selected={selected}/>
          <Irkutsk callback={selectCountry} selected={selected}/>
          <Kamchatka callback={selectCountry} selected={selected}/>
          <MiddleEast callback={selectCountry} selected={selected}/>
          <Mongolia callback={selectCountry} selected={selected}/>
          <Siam callback={selectCountry} selected={selected}/>
          <China callback={selectCountry} selected={selected}/>
          <Japan callback={selectCountry} selected={selected}/>
          <Siberia callback={selectCountry} selected={selected}/>
          <Ural callback={selectCountry} selected={selected}/>
          <Yakutsk callback={selectCountry} selected={selected}/>
        </g>;
}

