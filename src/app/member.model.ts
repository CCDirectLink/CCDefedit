import {Entry} from './entry.model';
import {Leaf} from './leaf.model';
export class Member {
    constructor(
        public name: string,
        public pattern: string,
        public from: {
          type: string,
          values: any[]
        },
        public leaf: Leaf
    ) { }
    clone(): Member {
        const newLeaf = JSON.parse(JSON.stringify(this.leaf));
        const newFrom = JSON.parse(JSON.stringify(this.from));
        console.log('Cloning member', this);
        return new Member(this.name,
                          this.pattern,
                          newFrom,
                          newLeaf);
    }
    clear(): void {
      this.from.values = [];
      this.from = {type : '', values: []};
    }
}
