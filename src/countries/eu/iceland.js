import { useState } from 'react';
import Country from '../country';

export default function Iceland({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Iceland' d={`M425 156c-2,-1 -5,-2 -8,-2 0,-2 0,-3 -1,-5 3,0 3,0 3,-1 -1,0 -3,0 -4,0 0,-1 0,-2 0,-3 1,0 3,0 4,0 0,0 0,-1 0,-1 -1,0 -3,0 -4,0 0,-1 1,-2 1,-3 4,-2 4,-2 8,-1 0,0 0,1 0,2 7,0 15,-1 23,-1 1,1 2,1 3,2 -1,1 -1,1 -2,2 1,0 2,0 3,0 -2,12 -17,10 -26,11z`} />
}
