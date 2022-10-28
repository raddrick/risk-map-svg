import { useState } from 'react';
import Country from '../country';

export default function Ontario({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Ontario' d={`M264 231c2,-1 2,-1 3,-6 1,1 3,1 4,2 0,-2 -1,-4 -1,-6 -16,-5 -8,-18 -29,-10 -1,-1 -2,-2 -3,-3 -3,0 -6,0 -9,-1 -6,0 -13,0 -20,0 1,-17 3,-35 4,-52 5,0 10,0 15,1 4,0 7,0 10,0 0,2 0,4 0,5 1,1 2,1 3,1 0,2 0,4 1,6 2,2 5,3 8,5 0,1 0,2 0,3 7,2 15,6 23,5 0,8 1,11 5,17 0,8 -1,17 -1,25 1,0 2,0 4,0 0,-1 0,-2 0,-2 5,0 7,0 11,4 -3,1 -6,2 -9,3 0,1 0,1 0,2 -7,2 -13,8 -20,7 0,-2 1,-4 1,-6z`} />
}
