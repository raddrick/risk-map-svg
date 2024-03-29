import { useState } from 'react';
import Country from '../country';

export default function NorthAfrica({ callback }) {
  const [coords,setCoords] = useState([[-1,-4],[-1,-6],[0,-10],[-7,-3],[-7,-3],[-13,-3],[-2,-6],[-2,-6],[-4,-7],[-5,0],[-9,1],[-14,1],[0,1],[0,2],[0,3],[-16,-1],[-25,7],[-36,-8],[-6,-2],[-10,-16],[-12,-22],[0,0],[-1,0],[-2,0],[0,-1],[0,-2],[0,-3],[-1,0],[-2,0],[-3,0],[-2,-9],[-2,-16],[1,-25],[0,-9],[-1,-19],[2,-28],[5,-1],[8,-15],[10,-20],[13,-6],[13,-10],[17,-25],[7,-4],[9,-7],[14,-14],[0,0],[1,0],[1,0],[7,5],[16,-1],[23,-4],[7,0],[10,-1],[28,-2],[0,2],[0,3],[0,4],[-1,1],[-1,1],[-2,1],[2,3],[1,6],[1,10],[-1,0],[-3,0],[-4,0],[0,1],[0,1],[3,1],[0,1],[0,2],[0,3],[2,1],[4,2],[6,3],[-4,0],[-4,0],[-8,3],[0,3],[0,5],[-1,7],[0,1],[-1,1],[-2,2],[1,10],[0,18],[1,29],[9,8],[16,9],[28,11],[1,2],[2,4],[2,6],[7,2],[8,7],[15,9],[-2,13],[-5,23],[-4,37],[-6,4],[-10,8],[-17,9],[0,2],[0,3],[-1,4],[-5,2],[-6,5],[-10,7],[2,7],[1,12],[0,20],[-4,0],[-4,0],[-13,-2],[0,1],[0,2],[0,3],[-2,0],[-4,0],[-6,0]]);
  const c = coords.map((coord) => coord.join(',')).join(' ');
  return <Country callback={callback} name='NorthAfrica' d={`M468 473c${c}z`} />
}