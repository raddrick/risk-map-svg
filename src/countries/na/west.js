import { useState } from 'react';
import Country from '../country';

export default function WestUS({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='WestUS' d={`M144 275c-15,-24 -15,-33 -9,-61 1,0 2,0 4,0 -1,-5 -1,-5 -3,-9 24,1 49,1 73,2 7,0 14,0 20,0 -1,14 -1,28 -2,43 -6,0 -12,0 -18,0 -1,3 -2,6 -2,9 -3,0 -6,1 -8,1 -1,5 -2,9 -3,13 -2,1 -4,1 -5,1 0,4 0,9 0,13 -2,-1 -4,-2 -6,-2 -9,-10 -19,-1 -27,-10 -5,0 -10,0 -14,0z`} />
}
