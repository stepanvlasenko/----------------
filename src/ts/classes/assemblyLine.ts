export class AssemblyLine {
    public readonly speed: number
    public readonly sections: number

    constructor(sections: number, speed: number) {
        this.sections = sections
        this.speed = speed
    }
}