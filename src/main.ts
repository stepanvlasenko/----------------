import * as THREE from 'three'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
import { Belt } from './ts/classes'
import { ICell, BasicMesh, CellItem } from '@types'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const loader = new THREE.TextureLoader()
// const raycaster = new THREE.Raycaster();
// Решение проблемы с драг контролами.
// При инициализации приложения создавать массив предметов, которые могут быть на ленте.
// При помещении на мейн ленту брать их оттуда, а при исчезании с фрукто-лент добавлять.
let dragControls = new DragControls([], camera, document.body)


camera.position.z = 5
camera.position.y = -3

const geometry = new THREE.BoxGeometry(1, 1, 0.3)
const material1 = new THREE.MeshBasicMaterial({ color: 0x383838 })
const material2 = new THREE.MeshBasicMaterial({ color: 0x707070 })

const appleTexture = loader.load('/apple.png')
const bananaTexture = loader.load('/banana.png')

const appleMaterial = new THREE.MeshBasicMaterial({ map: appleTexture, transparent: true })
const bananaMaterial = new THREE.MeshBasicMaterial({ map: bananaTexture, transparent: true })

const fruitGeometry = new THREE.BoxGeometry( 0.7, 0.7, 0.3001 );

const mainBelt = new Belt(17)
const appleBelt = new Belt(17)

function initializeBelt(belt: Belt, height: number): void {
    for (let i = 0; i < belt.length; i += 1) {
        const cube = new THREE.Mesh(geometry, i % 2 ? material1 : material2)
        cube.position.y = height
        cube.position.x = -8 + i
        scene.add(cube)
        belt.cells.push({
            item: null,
            itemElement: null,
            element: cube
        })
    }
    
}
initializeBelt(mainBelt, 0)
initializeBelt(appleBelt, -3)


function chooseItem(): CellItem | null {
    const items: (CellItem | null)[] = [null, 'banana', 'apple']
    const chance = Math.floor(Math.random() * items.length)
    return items[chance]

}

function createItemElement(item: CellItem | null): BasicMesh | null {
    if (item) {
        if (item === 'apple') {
            return new THREE.Mesh( fruitGeometry, appleMaterial)
        }
        if (item === 'banana') {
            return new THREE.Mesh( fruitGeometry, bananaMaterial)
        }
    }
    return null
}
function moveMainCellToStart(cell: ICell): void {
    if (cell.itemElement) {
        scene.remove(cell.itemElement)
    }
    cell.item = chooseItem()
    cell.itemElement = createItemElement(cell.item)
    if (cell.itemElement) {
        scene.add(cell.itemElement)
    }
    cell.element.position.x = -8
}

function moveFruitCellToStart(cell: ICell): void {
    if (cell.itemElement) {
        scene.remove(cell.itemElement)
    }
}

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


// let pointerTakenElement: any = null
// function onPointerMove(event: PointerEvent) {
//     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1
//     raycaster.setFromCamera( pointer, camera )
//     // if (pointerTakenElement) {
//     //     pointerTakenElement.position.x = pointer.x
//     //     pointerTakenElement.position.y = pointer.y
//     // }

// }

// function onPointerDown(event: PointerEvent) {
//     pointer.x = (event.clientX / window.innerWidth) * 2 - 1
// 	pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
//     raycaster.setFromCamera( pointer, camera )

//     const anyitem: BasicMesh[] = []
//     Belt.instances.forEach((belt) => {
//         belt.cells.forEach((cell) => {
//             if (cell.itemElement) {
//                 anyitem.push(cell.itemElement)
//             }
//         })
//     })
//     const intersects = raycaster.intersectObjects(anyitem, false);

//     const itemElement = intersects.length ? intersects[0].object : null
//     pointerTakenElement = itemElement
// }
// document.addEventListener( 'pointermove', onPointerMove );
// document.addEventListener( 'pointerdown', onPointerDown );


function animate() {
    mainBelt.cells.forEach((cell) => {
        cell.element.position.x += 0.01    
        if (cell.element.position.x >= 8) {
            cell.element.position.x = -8
            moveMainCellToStart(cell)
        }
        if (cell.itemElement) {
            cell.itemElement.position.x = cell.element.position.x
        }
    })
    appleBelt.cells.forEach((cell) => {
        cell.element.position.x += 0.01    
        if (cell.element.position.x >= 8) {
            cell.element.position.x = -8
            moveFruitCellToStart(cell)
        }
        if (cell.itemElement) {
            cell.itemElement.position.x = cell.element.position.x
        }
    })

	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}
animate()