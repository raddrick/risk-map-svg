import { useState } from 'react';
import Country from '../country';

export default function Siam({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Siam' d={`M757 369c1,-4 2,-8 4,-12 1,-1 2,-1 3,-1 1,-4 1,-4 1,-7 0,0 1,0 2,0 1,-6 1,-8 4,-13 2,-1 3,-2 5,-2 3,8 3,9 0,16 1,0 3,0 4,0 0,1 0,2 0,3 1,-1 2,-1 2,-1 6,-10 14,-14 20,-3 -3,1 -5,3 -7,5 0,2 -1,5 -1,8 2,0 3,1 5,1 0,2 1,3 1,4 1,1 2,1 3,2 0,0 0,1 0,2 1,0 2,0 3,0 0,9 0,14 -3,21 -2,0 -4,0 -5,0 -2,4 -2,6 -6,8 -1,-2 -1,-2 -2,-6 -1,0 -2,0 -2,0 0,-2 0,-3 0,-4 -3,-1 -5,-1 -7,-2 0,-1 0,-1 0,-2 -1,0 -2,0 -4,0 0,-2 0,-3 0,-4 0,0 -1,0 -1,0 -1,11 -6,13 2,24 3,1 5,2 7,3 1,6 0,11 1,17 -1,0 -2,0 -4,0 -7,-6 -7,-8 -9,-18 0,0 -1,0 -2,0 -7,-12 2,-31 -14,-35 0,-2 0,-3 0,-4z`} />
}
