import THREE from 'three'

export interface ICell {
    item: CellItem | null
    itemElement: BasicMesh | null
    element: BasicMesh
}

export type BasicMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> 

export type CellItem = 'banana' | 'apple'