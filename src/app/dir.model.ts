import { Entry, cloneEntry} from './entry.model';
import Member from './member.model';
export class Dir {
  constructor(
      public type: string,
      public name: string,
      public children: Entry[] = []
  ) { }

  clone(): Dir {
    const newChildren = this.children.map((e) => {
        const newChild = cloneEntry(e);
        return newChild;
    });
    return new Dir(this.type,
                   this.name,
                   newChildren);
  }
  getAllChildrenMembers() {
    const children = [];
    this.children.forEach((child) => {
        if(child.value instanceof Dir) {
          children.push.apply(children, child.value.getAllChildrenMembers());
        } else {
          children.push(child);
        }
    });
    return children;
  }
  clear(): void {
    this.children.forEach((e) => e.value.clear());
    this.children = [];
  }
}
