import { ICell, BasicMesh } from '@types'
export class Belt {
    public static instances: Belt[] = []

    public cells: ICell[] = []
    public length: number
    public readonly height: number

    constructor(length: number, height: number) {
        this.length = length
        this.height = height

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