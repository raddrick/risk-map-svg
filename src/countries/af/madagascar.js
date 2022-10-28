import { useState } from 'react';
import Country from '../country';

export default function Madagascar({ callback }) {
  const [coords,setCoords] = useState([[-5,-6],[-4,-15],[-1,-22],[0,0],[1,0],[2,0],[2,-15],[1,-16],[14,-21],[6,-5],[6,-5],[7,-8],[1,0],[2,0],[3,0],[0,5],[0,11],[0,17],[0,0],[-1,0],[-2,0],[0,1],[0,2],[0,4],[-1,0],[-2,0],[-3,0],[-1,11],[-9,26],[-20,30]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Madagascar' d={`M579 589c${c}z`} />;
}
