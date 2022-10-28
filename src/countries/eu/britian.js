import { useState } from 'react';
import Country from '../country';

export default function GreatBritian({ callback }) {
  const [coords,setCoords] = useState([[]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='GreatBritian' d={`M455 226c-7,2 -23,9 -30,8 0,-1 -1,-2 -1,-3 4,-2 8,-5 12,-7 -2,0 -4,-1 -6,-1 2,-6 2,-6 3,-12 1,0 3,0 5,0 0,-3 -1,-5 1,-8 -1,0 -2,-1 -3,-1 0,-1 0,-3 0,-4 -1,0 -2,0 -3,0 0,-9 2,-13 3,-21 5,-2 5,-2 8,-2 1,2 1,2 0,6 2,1 4,2 6,3 -8,11 0,20 2,33 1,0 2,0 3,1 0,2 0,5 0,8z M415 226c-1,-5 1,-9 0,-20 1,-1 2,-1 4,-2 -1,-2 -1,-2 0,-5 5,0 8,0 13,2 0,3 0,6 0,9 -1,0 -2,0 -3,0 -1,10 -3,14 -14,16z`} />
}
