import { Entry, cloneEntry} from './entry.model';

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
    console.log('Cloning Dir', this);
    return new Dir(this.type,
                   this.name,
                   newChildren);
  }

  clear(): void {
    this.children.forEach((e) => e.value.clear());
    this.children = [];
  }
}
