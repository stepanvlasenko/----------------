import * as THREE from 'three';

var img1 = new Image();
img1.src = '/apple.png';
var tex1 = new THREE.Texture(img1);
img1.tex = tex1;
img1.onload = function () {
    img1.tex.needsUpdate = true;
 };
 var img2 = new Image();
 img2.src = '/banana.png';
 var tex2 = new THREE.Texture(img2);
 img2.tex = tex2;
 img2.onload = function () {
     img2.tex.needsUpdate = true;
  };

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.BoxGeometry( 1, 1, 0.3 );
const geometryFruit = new THREE.BoxGeometry( 0.7, 0.7, 0.3001 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x383838 } );
const material2 = new THREE.MeshBasicMaterial( { color: 0x707070 } );
const materialB1 = new THREE.MeshBasicMaterial( { color: 0xffdd1c } );
const materialB2 = new THREE.MeshBasicMaterial( { color: 0xe0c219 } );
const materialA1 = new THREE.MeshBasicMaterial( { color: 0xde2323 } );
const materialA2 = new THREE.MeshBasicMaterial( { color: 0xb51d1d } );
const materialA = new THREE.MeshBasicMaterial( { map:tex1, transparent: true } );
const materialB = new THREE.MeshBasicMaterial( { map:tex2, transparent: true } );



const Maincubes:any[] = []
const Applecubes = []
const Bananacubes = []

const apple = new THREE.Mesh( geometryFruit, materialA)

const banana = new THREE.Mesh( geometryFruit, materialB)

scene.add(apple)
scene.add(banana)

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
        cube = new THREE.Mesh( geometry, materialB1 );
    }
    else{
        cube = new THREE.Mesh( geometry, materialB2 );
    }
    cube.position.y = -4
    cube.position.x = -8+i
    Applecubes.push(cube)
}
for (let i = 0; i<17; i+=1){
    let cube
    
    if (i %2 == 1){
        cube = new THREE.Mesh( geometry, materialA1 );
    }
    else{
        cube = new THREE.Mesh( geometry, materialA2 );
    }
    cube.position.y = -5.75
    cube.position.x = -8+i
    Bananacubes.push(cube)
}
Maincubes.forEach((value) => {
    scene.add(value)
})
Bananacubes.forEach((value) => {
    scene.add(value)
})
Applecubes.forEach((value) => {
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
// let time = 0



function animate() {
    // time+=0.01
    // if (time=)
    Maincubes.forEach((value) => {
        value.position.x += 0.01
        if (value.position.x >=8){
            value.position.x=-8
            if (value.material == material1){
                let a = Math.floor(Math.random() * 3)
                if ( a == 1){
                    apple.position.x = -8
                }
                else{
                    if (a == 2){
                        banana.position.x = -8
                    }
                }
            }
        }
    })
    Applecubes.forEach((value) => {
        value.position.x += 0.01
        if (value.position.x >=8){
            value.position.x=-8
        }
    })
    Bananacubes.forEach((value) => {
        value.position.x += 0.01
        if (value.position.x >=8){
            value.position.x=-8
        }
    })
    apple.position.x += 0.01
    banana.position.x += 0.01

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