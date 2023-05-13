import * as THREE from 'three';

var img = new Image();
img.src = '/' + '.png';
var tex = new THREE.Texture(img);
img.tex = tex;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.BoxGeometry( 1, 1, 0.3 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x383838 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x707070 } );
const materialB = new THREE.MeshBasicMaterial(  );

const Maincubes:any[] = []
const Applecubes = []
const Bananacubes = []

for (let i = 0; i<17; i+=1){
    let cube
    if (i %2 == 1){
        cube = new THREE.Mesh( geometry, material1 );
    }
    else{
        cube = new THREE.Mesh( geometry, material2 );
    }
    cube.position.x = -8+i
    Maincubes.push(cube)
}
for (let i = 0; i<17; i+=1){
    let cube
    if (i %2 == 1){
        cube = new THREE.Mesh( geometry, material1 );
    }
    else{
        cube = new THREE.Mesh( geometry, material2 );
    }
    cube.position.y = -4
    cube.position.x = -8+i
    Maincubes.push(cube)
}
for (let i = 0; i<17; i+=1){
    let cube
    
    if (i %2 == 1){
        cube = new THREE.Mesh( geometry, material1 );
    }
    else{
        cube = new THREE.Mesh( geometry, material2 );
    }
    cube.position.y = -5.75
    cube.position.x = -8+i
    Maincubes.push(cube)
}
Maincubes.forEach((value) => {
    scene.add(value)
})

// const cube1 = new THREE.Mesh( geometry, material1 );
// scene.add( cube1 );
// const cube2 = new THREE.Mesh( geometry, material2 );
// scene.add( cube2 );
// const cube3 = new THREE.Mesh( geometry, material1 );
// scene.add( cube3 );
// const cube4 = new THREE.Mesh( geometry, material2 );
// scene.add( cube4 );

camera.position.z = 5;
camera.position.y = -3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// cube1.position.x = -3
// cube2.position.x = -1
// cube3.position.x = 0
// cube4.position.x = 1

function animate() {
    Maincubes.forEach((value) => {
        value.position.x += 0.01
        if (value.position.x >=8){
            value.position.x=-8
        }
    })
    // cube1.position.x +=0.01
    // cube2.position.x +=0.01
    // cube3.position.x +=0.01
    // cube4.position.x +=0.01
    // if (cube1.position.x >= 3) {
    //     cube1.position.x = -3
    // }
    // console.log(cube1.position.x)
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    }
animate();