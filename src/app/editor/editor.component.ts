import Leaf from '../leaf.model';
import MemberEntry from '../member.entry.model';
import { Dir } from '../dir.model';
import { EventEmitter, Output, Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Entry } from '../entry.model';
import Member from '../member.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() entry: Entry;
  @Input() root: Entry;
  @Output() nameChange = new EventEmitter();
  allObjectNames: string[] = [];
  allEntryNames: string[] = [];
  elementRef;
  constructor() {}

  ngOnInit() {}
  ngOnChanges({root,entry, ...rest} : SimpleChanges) {
    let rootEntry = null;
    if(root && root.currentValue) {
      rootEntry = root.currentValue;
      // create a list of names for every entry
      console.log('The root changed');

      this.getAllPaths(rootEntry,this.allObjectNames);

      console.log('All paths', this.allObjectNames);
    }
    console.log("I changed!", arguments);
    if(entry) {
      console.log(rootEntry);
      this.allEntryNames.splice(0);

      this.getEntryNames(this.root, this.allEntryNames);
      console.log('All Entry Names', this.allEntryNames);
    }
  }
  onNameChange(event) {
    const value = this.entry.value;
    value.name = event.target.value;
    if (this.entry.type === 'member') {
      value.leaf.name = value.name;
    }
  }
  public onTypeChange(event): void {
    // remove all fields
    const oldEntry = this.entry.value.clone();

    this.entry.value.clear();
    delete this.entry.value;

    const type = this.entry.type = event.target.value;
    if (type === 'member') {
      const memEntry = <MemberEntry> {
        type : 'select',
        pattern : '',
        from : <any>{
          type: '',
          values: []
        }
      };
      const leaf = <Leaf> {
        type : 'static',
        name : oldEntry.name,
        parent : ''
      };
      this.entry.value = new Member(memEntry,
                                    leaf);
    } else if (type === 'object') {
      this.entry.value = new Dir(type,
                                 oldEntry.name);
    }
    oldEntry.clear();
  }
  public getAllEntryNames() : string[] {
    return this.allEntryNames.filter((e) => !!e);
  }
  public getTitle(): string {
    return '(' + this.getPath(this.root, this.entry) + ')';
  }
  private getAllPaths(entry: Entry, arr: string[] = [], current: string = '') : void {
    if (current.length) {
      current += '.' + entry.name;
    } else {
      current = entry.name;
    }
    const dir = entry.value;
    for (const aEntry of dir.children) {
      if (aEntry.type === 'member') {
        arr.push(current + '.' + aEntry.name);
      } else if (aEntry.type === 'object') {
        this.getAllPaths(aEntry, arr, current);
      }
    }
  }

  private getEntryNames(entry: Entry, arr: string[] = []) : void {
    if (!entry)
      return;
    
    const dir = entry.value;
    for (const aEntry of dir.children) {
      if (aEntry.type === 'member') {
        arr.push(aEntry.name || "");
      } else if (aEntry.type === 'object') {
        this.getEntryNames(aEntry, arr);
      }
    }
  }

  private getPath(entry: Entry, currentEntry: Entry, current: string = ''): string {
    if (current.length) {
      current += '.' + entry.name;
    } else {
      current = entry.name;
    }
    if (entry !== currentEntry) {
      const dir = entry.value;
      for (const aEntry of dir.children) {
        if (aEntry.type === 'member') {
          if (aEntry === currentEntry) {
            return current + '.' + aEntry.name;
          }
        } else if (aEntry.type === 'object') {
          const result = this.getPath(aEntry, currentEntry, current);
          if (result) {
            return result;
          } else {
            return current + '.' + aEntry.name;
          }
        }
      }
    return current;
  }
}
  public remove(i: number): void {
    (<Member>this.entry.value).entry.from.values.splice(i, 1);
  }

  public add(): void {
    (<Member>this.entry.value).entry.from.values.push({name: '', value: ''});
  }
}
