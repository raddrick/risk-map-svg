import React, { useState, useEffect, useRef } from 'react';
import Path from './path';

export default function Country({d, name, country, owner, _armies, callback}) {
	const outline = useRef(0);
	const [box,setBox] = useState({});
	const [bounds,setBounds] = useState({});
	const [centerX,setCenterX] = useState(0);
	const [centerY,setCenterY] = useState(0)
  	const [armies,setArmies] = useState(1);
	const useBBox = useEffect((e) => {
		if (!centerX || !centerY){
			let bo = outline.current.getBBox();
			let bou = outline.current.getBoundingClientRect();
			setBox(bo);
			setBounds(bou);
			setCenterX(bo.x+(bo.width/2));
			setCenterY(bo.y+(bo.height/2));
		}
	});

	return <g>
		<Path id={name} name={name} callback={callback} d={d} box={outline}/>

		<circle cx={centerX+4-armies} cy={centerY-6} r={10+armies} />
		<text x={centerX} y={centerY} stroke="black">{armies}</text>

	</g>
}