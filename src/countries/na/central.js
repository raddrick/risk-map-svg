import { useState } from 'react';
import Country from '../country';

export default function CentralAmerica({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='CentralAmerica' d={`M212 363c-3,-4 -6,-9 -9,-14 0,-7 0,-7 -2,-16 -10,-6 -18,-11 -28,-16 0,-1 0,-2 0,-3 1,0 3,0 4,0 0,-1 -1,-3 -1,-4 -9,-7 -11,-18 -16,-27 -1,0 -1,1 -2,1 4,11 8,20 11,32 -6,-2 -9,-10 -10,-16 -4,-1 -5,-2 -7,-6 0,-1 1,-1 1,-2 -2,-6 -3,-10 -8,-13 -1,-1 -1,-3 -1,-4 4,0 9,0 14,0 8,9 18,0 27,10 2,0 4,1 6,2 2,2 4,4 6,6 -2,8 -2,22 5,26 4,0 8,0 12,0 4,-4 11,-4 14,2 -2,5 -9,8 -13,11 2,1 4,2 6,3 0,2 0,4 0,6 -6,4 -8,5 -11,11 0,1 1,2 1,2 6,1 8,0 13,4 -5,3 -8,3 -12,5z`} />
}
