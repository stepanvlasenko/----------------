import { IItem } from '@types'

export class LinkedList<T> {
    public head: Node<T> | null = null
    public tail: Node<T> | null = null

    public push(value: T) {
        const node = new Node<T>(value)

        if (!this.head || !this.tail) {
            this.head = node
            this.tail = node
            return
        }

        this.tail.next = node
        this.tail.prev = null
        this.tail = node
    }
    // Доделать вытаскивание из начала. Не забыть про prev
    public pop(): Node<T> {
        const node = this.head

        this.head = 
    }
}

class Node<T> {
    public value: T
    public _next: Node<T> | null = null
    public _prev: Node<T> | null = null

    constructor(value: T) {
        this.value = value
    }

    get next() {
        return this._next
    }
    set next(nextNode: Node<T> | null) {
        this._next = nextNode
    }

    get prev() {
        return this._prev
    }
    set prev(prevNode: Node<T> | null) {
        this._prev = prevNode
    }
}