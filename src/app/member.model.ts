import {Entry} from './entry.model';
import {Leaf} from './leaf.model';
export class Member {
    constructor(
        public type: string,
        public from: {
          type: string,
          values: any[]
        },
        public leaf: Leaf
    ) { }
    clone(): Member {
        const newLeaf = JSON.parse(JSON.stringify(this.leaf));
        const newFrom = JSON.parse(JSON.stringify(this.from));
        return new Member(this.type,
                          newFrom,
                          newLeaf);
    }
    clear(): void {
      this.from.values = [];
      this.from = {type : '', values: []};
    }
}
