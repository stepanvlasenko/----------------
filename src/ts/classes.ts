import { IItem } from '@types'
export class Belt {
    private cells: (IItem | null)[] = []

    public setItem(index: number, item: any) {
        this.cells[index] = item
    }
    public removeItem(index: number) {
        this.cells[index] = null
    }
}