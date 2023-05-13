import { IItem } from '@types'
export class AssemblySection {
    private _item: IItem | null = null
    
    set item(item: IItem | null) {
        this._item = item
    }
    get item() {
        return this._item
    }
    deleteItem() {
        this.item = null
    }
}