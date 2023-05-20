import { ICell, BasicMesh } from '@types'
export class Belt {
    public static instances: Belt[] = []

    public cells: ICell[] = []
    public length: number

    constructor(length: number) {
        this.length = length

        Belt.instances.push(this)
    }

    public static getItemElements(): BasicMesh[] {
        const elements: BasicMesh[] = []
        Belt.instances.forEach((belt) => {
            belt.cells.forEach((cell) => {
                if (cell.itemElement) {
                    elements.push(cell.itemElement)
                }
            })
        })
        return elements
    }
}