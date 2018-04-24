const triangleGeometry = new THREE.Geometry();

triangleGeometry.vertices.push( new THREE.Vectors3( 1, 1, 0 ) );
triangleGeometry.vertices.push( new THREE.Vectors3( 3, 1, 0 ) );
triangleGeometry.vertices.push( new THREE.Vectors3( 3, 3, 0 ) );

triangleGeometry.faces.push( new TRHEE.Face3( 0, 1, 2 ) );

function newSquare(x1, y1, x2, y2) {
	const squareGeometry = new THREE.Geometry();

	squareGeometry.vertices.push( new THREE.Vectors3(x1, y1, 0) );
	squareGeometry.vertices.push( new THREE.Vectors3(x1, y2, 0) );
	squareGeometry.vertices.push( new THREE.Vectors3(x2, y1, 0) );
	squareGeometry.vertices.push( new THREE.Vectors3(x2, y2, 0) );
	
	squareGeometry.faces.push( new THREE.Face3( 0, 1, 2);
	squareGeometry.faces.push( new THREE.Face3( 2, 3, 1);

	return squareGeometry;	

};

