export class Test {
    static count = 0
    static init = () => {
        this.count++
        return this.count
    }
}
