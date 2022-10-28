export default function Path({d, name, callback, box}) {

	return <path 
		ref={box}
		className="country" 
		id={name} 
		value={name}
		d={d} 
		onClick={(e) => callback(e,e.target.id)} />
}