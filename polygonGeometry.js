function polygonGeometry(sides, location, radius) {
	const polygon = new THREE.Geometry();

	//generate vertices for polygon
	for(let pt = 0; pt < sides; pt++) {
		const angle = (Math.PI/2) + (pt / sides) * 2 * Math.PI;
		const x = radius * Math.cos(angle) + location.x;
		const y = radius * Math.sin(angle) + location.y;
		polygon.vertices.push( new THREE.Vector3(x, y, 0));
	}
	for(let face = 0; face < sides - 2; face++) {
		polygon.faces.push( new THREE.Vector3(0, face + 1, face + 2));
	}
	return polygon;
}
