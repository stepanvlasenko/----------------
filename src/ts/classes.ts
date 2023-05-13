import { ICell } from '@types'
export class Belt {
    public static instances: Belt[] = []

    public cells: ICell[] = []
    public length: number

    constructor(length: number) {
        this.length = length

        Belt.instances.push(this)
    }

    public setItem(index: number, item: any) {
        this.cells[index].item = item
    }
    public removeItem(index: number) {
        this.cells[index].item = null
    }
}