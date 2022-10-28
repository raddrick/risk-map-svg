import { useState } from 'react';
import Country from '../country';

export default function NorthEurope({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='NorthEurope' d={`M470 242c-2,-3 -3,-4 -6,-4 -2,-5 -6,-7 -9,-11 0,0 0,-1 0,-1 2,-3 4,-6 7,-7 2,-8 2,-8 4,-9 0,0 0,1 1,1 3,-4 6,-6 1,-10 0,-4 1,-8 2,-12 4,-2 5,-3 7,-7 1,6 3,15 -2,19 5,3 9,4 14,5 0,-1 1,-2 1,-3 1,1 2,2 2,3 4,-4 9,-4 14,-5 0,1 -1,2 -1,3 1,0 1,0 2,1 0,-1 0,-2 0,-3 1,0 3,-1 4,-1 3,2 6,4 9,6 2,8 3,14 3,23 -1,0 -2,0 -3,0 0,2 -1,3 -1,5 -2,5 -2,5 -4,16 -6,4 -8,3 -15,2 -1,-15 2,-14 -12,-15 0,2 -1,3 -1,5 -8,2 -10,2 -17,-1z`} />
}
