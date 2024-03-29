import { useState } from 'react';
import Country from '../country';

export default function EastAfrica({ callback }) {
  const [coords,setCoords] = useState([[-1,-6],[-1,-12],[-2,-17],[5,-1],[6,-8],[7,-12],[1,0],[2,0],[4,0],[1,-8],[11,-8],[10,-19],[-5,-1],[-10,-2],[-16,-2],[0,-2],[-1,-4],[-2,-6],[0,1],[-1,2],[-2,3],[-7,-10],[-12,-18],[-16,-29],[-1,-14],[2,-24],[4,-37],[0,-1],[0,-3],[0,-4],[1,0],[2,0],[4,0],[-1,-3],[-1,-3],[1,-9],[11,0],[22,0],[33,0],[2,-3],[2,-3],[5,-4],[7,11],[9,26],[14,38],[1,1],[2,1],[3,1],[2,5],[3,9],[5,14],[-1,0],[-2,0],[-3,0],[9,6],[21,1],[30,-1],[0,0],[0,1],[1,2],[-4,12],[-9,23],[-16,34],[-15,12],[-22,25],[-33,39],[0,7],[0,14],[1,21],[-6,1],[-11,2],[-16,4],[-2,6],[-2,16],[-2,18],[-2,-1],[-3,-1],[-5,-1],[0,-7],[0,-15],[0,-23],[-2,-3],[-5,-7],[-7,-10],[-1,0],[-2,0],[-2,0]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='EastAfrica' d={`M532 514c${c}z`} />;
}