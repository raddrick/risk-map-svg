import { useState } from 'react';
import Country from '../country';

export default function Alberta({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Alberta' d={`M136 205c-1,-1 -2,-3 -4,-4 0,-2 1,-4 1,-6 -3,-3 -6,-6 -8,-8 -1,0 -3,0 -4,0 0,-2 0,-3 0,-5 1,1 1,1 1,2 0,-1 0,-2 0,-3 0,-12 -4,-22 -12,-32 34,2 69,4 103,6 -1,17 -3,35 -4,52 -24,-1 -49,-1 -73,-2z`} />
}
