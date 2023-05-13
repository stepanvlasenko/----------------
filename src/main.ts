import * as THREE from 'three'
import { Belt } from './ts/classes'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

camera.position.z = 5
camera.position.y = -3

const geometry = new THREE.BoxGeometry(1, 1, 0.3)
const material1 = new THREE.MeshBasicMaterial({ color: 0x383838 })
const material2 = new THREE.MeshBasicMaterial({ color: 0x707070 })

const mainBelt = new Belt(17)

function initializeBelt(belt: Belt, height: number): void {
    for (let i = 0; i < belt.length; i += 1) {
        const cube = new THREE.Mesh(geometry, i % 2 ? material1 : material2)
        cube.position.y = height
        cube.position.x = -8 + i
        scene.add(cube)
        belt.cells.push({
            item: null,
            element: cube
        })
    }
}

initializeBelt(mainBelt, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

function animate() {
    Belt.instances.forEach((belt) => {
        belt.cells.forEach((cell) => {
            cell.element.position.x += 0.01
        })
    })
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
animate()