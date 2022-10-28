import { useState } from 'react';
import Country from '../country';

export default function WestAustralia({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='WestAustralia' d={`M831 510c1,13 2,25 3,38 13,0 27,0 41,0 0,17 0,34 0,52 -2,-1 -3,-1 -5,-1 0,-3 -1,-6 -2,-9 -4,0 -4,0 -5,-2 1,0 2,-1 3,-1 0,-1 0,-2 0,-3 -1,2 -1,2 -5,2 1,-1 2,-3 3,-4 -2,0 -5,1 -8,2 -2,-4 -4,-7 -5,-10 -12,-2 -25,-1 -32,9 -5,0 -8,-1 -13,-1 -11,6 -19,10 -30,5 2,-7 2,-11 1,-18 -5,-14 -5,-14 -5,-17 1,0 1,0 2,0 -2,-5 -1,-10 0,-15 1,0 3,0 4,0 0,-1 0,-1 0,-2 7,-4 14,-6 21,-9 0,-1 0,-2 0,-3 9,-3 12,-9 21,-12 0,-1 1,-2 1,-4 1,1 1,1 2,2 0,-1 0,-2 0,-3 1,0 3,-1 4,-1 1,1 2,2 3,3 -1,0 -1,1 -1,1 0,0 1,1 2,1z`} />
}
