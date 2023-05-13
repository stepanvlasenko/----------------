import THREE from 'three'

export interface ICell {
    item: CellItem | null
    element: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>
}

export type CellItem = 'banana' | 'apple'