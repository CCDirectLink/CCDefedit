import { Dir } from '../dir.model';
import { EventEmitter, Output, Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry.model';
import { Member } from '../member.model';

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
  constructor() { }

  ngOnInit() {
  }
  onNameChange(event) {
  }
  public onTypeChange(event): void {
    // remove all fields

    const name = this.entry['name'];
    const layer = this.entry['layer'];
    for (const key of Object.keys(this.entry)) {
      if (true) {
        delete this.entry[key];
      }
    }

    const type = this.entry.type = event.target.value;
    this.entry['name'] = name || '';
    this.entry['layer'] = layer || 0;
    if (type === 'member') {
      //
      this.entry['compiled'] = {
        pattern : '',
        from : {
          type : '',
          values : []
        }
      };

    } else if (type === 'object') {
      this.entry['members'] = [];
    }
  }
  public getTitle(): string {
    return '(' + this.getPath(<Dir>this.root) + ')';
  }

  private getPath(dir: Dir): string {
    if (dir === this.entry) {
      return dir.name;
    }

    for (const entry of dir.members) {
      if (entry.type === 'member') {
        if (entry === this.entry) {
          return dir.name + '.' + entry.name;
        }

      } else if (entry.type === 'object') {
        const result = this.getPath(<Dir>entry);
        if (result) {
          return dir.name + '.' + result;
        }
      }
    }

    return undefined;
  }

  public remove(i: number): void {
    (<Member>this.entry).compiled.from.values.splice(i, 1);
  }

  public add(): void {
    (<Member>this.entry).compiled.from.values.push({name: '', value: ''});
  }
}
