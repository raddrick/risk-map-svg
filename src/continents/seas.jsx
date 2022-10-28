import Mediterranean from '../seas/mediterranean'
import DeadSea from '../seas/dead'
import BlackSea from '../seas/black'
import GreatLakes from '../seas/great'

export default function Seas() {
  return <g id="Seas" fill="#FFFFFF">
          <path className='sea' id="Mediterranean" d={Mediterranean()}/>
          <path className='sea' id="Dead Sea" d={DeadSea()}/>
          <path className='sea' id="Black Sea" d={BlackSea()}/>
          <path className='sea' id="Great Lakes" d={GreatLakes()}/>
        </g>;
}

