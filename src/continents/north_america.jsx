import Alaska from '../countries/na/alaska';
import Alberta from '../countries/na/alberta';
import CentralUS from '../countries/na/central';
import EastUS from '../countries/na/east';
import Greenland from '../countries/na/greenland';
import Northwest from '../countries/na/northwest';
import Ontario from '../countries/na/ontario';
import WestUS from '../countries/na/west';
import Quebec from '../countries/na/quebec';

export default function NorthAmerica({ selectCountry, selected }) {
  return <g id="North America" stroke="rgb(201,155,50)" fill="#EFCB73" visibility="visible">
          <Alaska callback={selectCountry} selected={selected} />
          <Alberta callback={selectCountry} selected={selected} />
          <CentralUS callback={selectCountry} selected={selected} />
          <EastUS callback={selectCountry} selected={selected} />
          <Greenland callback={selectCountry} selected={selected} />
          <Northwest callback={selectCountry} selected={selected} />
          <Ontario callback={selectCountry} selected={selected} />
          <WestUS callback={selectCountry} selected={selected} />
          <Quebec callback={selectCountry} selected={selected} />
        </g>;
}

