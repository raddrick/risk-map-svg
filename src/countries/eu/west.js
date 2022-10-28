import { useState } from 'react';
import Country from '../country';

export default function WestEurope({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='WestEurope' d={`M428 312c-1,-2 -3,-3 -4,-5 -3,0 -6,0 -9,0 -3,-11 -2,-19 -1,-31 0,0 0,-1 -1,-1 3,-12 15,-7 26,-7 5,-6 0,-16 -1,-22 -4,-1 -4,-1 -8,-4 3,-1 3,-1 4,-4 1,0 2,0 3,0 0,1 0,1 0,2 6,-2 6,-2 7,-3 0,0 -1,0 -2,-1 0,-1 0,-1 0,-2 2,0 5,0 8,0 1,-1 1,-1 2,-5 3,0 3,0 3,-2 3,4 7,6 9,11 3,0 4,1 6,4 -6,5 -9,22 -1,26 -1,1 -1,2 -1,3 -4,0 -8,0 -12,1 -6,11 -7,12 -7,25 -1,3 -4,5 -6,8 -6,1 -10,2 -14,7 0,0 -1,0 -1,0z`} />
}
