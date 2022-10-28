import { useState } from 'react';
import Country from '../country';

export default function Irkutsk({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Irkutsk' d={`M786 217c-11,-10 -5,-34 3,-45 5,-3 5,-3 8,-6 3,0 7,-1 11,-2 2,-2 3,-5 5,-7 8,0 10,-2 29,-1 0,0 0,1 1,2 2,1 5,1 8,1 2,6 3,6 8,9 -1,10 -5,20 -6,30 -4,0 -9,2 -12,-1 -2,1 -4,2 -5,3 0,4 1,8 -4,9 0,5 -1,8 -3,13 -1,0 -2,0 -3,0 0,-2 -1,-4 -1,-7 -4,1 -4,1 -11,5 -9,-1 -19,0 -28,-3z`} />
}
