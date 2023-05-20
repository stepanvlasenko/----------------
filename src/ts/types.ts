import THREE from 'three'

export interface GlobalItem {
    item: CellItem | null
    itemElement: BasicMesh | null
}

export interface ICell extends GlobalItem {
    element: BasicMesh
}

export type BasicMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> 

export type CellItem = 'banana' | 'apple'