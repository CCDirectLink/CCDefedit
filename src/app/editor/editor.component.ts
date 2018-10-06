import Leaf from '../leaf.model';
import MemberEntry from '../member.entry.model';
import { Dir } from '../dir.model';
import { EventEmitter, Output, Component, OnInit, Input } from '@angular/core';
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
  elementRef;
  constructor() {}

  ngOnInit() {

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
  public getTitle(): string {
    return '(' + this.getPath(this.root) + ')';
  }

  private getPath(entry: Entry, current: string = ''): string {
    if (current.length) {
      current += '.' + entry.name;
    } else {
      current = entry.name;
    }
    if (entry !== this.entry) {
      const dir = entry.value;
      for (const aEntry of dir.children) {
        if (aEntry.type === 'member') {
          if (aEntry === this.entry) {
            return current + '.' + aEntry.name;
          }
        } else if (aEntry.type === 'object') {
          const result = this.getPath(aEntry, current);
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
