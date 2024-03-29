import { useState } from 'react';
import Country from '../country';

export default function Egypt({ callback }) {
  const [coords,setCoords] = useState([[8,2],[15,10],[23,9],[0,-4],[0,-4],[1,-7],[12,-3],[24,4],[35,8],[5,0],[9,0],[14,0],[1,5],[3,10],[4,15],[-2,0],[-4,-1],[-6,-1],[2,9],[5,17],[7,26],[-3,1],[-3,1],[-5,4],[-11,0],[-22,0],[-33,0],[-2,6],[-2,6],[-1,9],[-2,0],[-3,0],[-4,0],[0,1],[0,3],[0,4],[-7,-2],[-8,-7],[-15,-9],[0,-2],[-1,-4],[-2,-6],[-12,-2],[-19,-3],[-28,-11],[-1,-11],[0,-19],[-1,-29],[1,-1],[2,-1],[2,-2],[1,-2],[1,-4],[1,-7],[4,-3],[4,-3],[8,-3]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='Egypt' d={`M484 328c${c}z`} />;
}