import {Entry} from './entry.model';
import Leaf from './leaf.model';
import MemberEntry from './member.entry.model';


export default class Member {
    constructor(
        public entry: MemberEntry,
        public leaf: Leaf
    ) { }
    clone(): Member {
        const newMemberEntry = JSON.parse(JSON.stringify(this.entry));
        const newLeaf = JSON.parse(JSON.stringify(this.leaf));
        return new Member(newMemberEntry,
                          newLeaf);
    }
    clear(): void {
      this.entry = <MemberEntry>{};
      this.leaf = <Leaf>{};
    }
}
