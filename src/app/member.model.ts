import { Entry } from "./entry.model";

export class Member implements Entry{
    constructor(
        public type: string,
        public refType: string,
        public name: string,
        public parent: string,
        public compiled: any,
        public layer: number = 0
    ){}
}