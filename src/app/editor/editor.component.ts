import { Dir } from '../dir.model';
import { Component, OnInit, Input } from '@angular/core';
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


  constructor() { }

  ngOnInit() {
  }

  public getTitle(): string{
    return '(' + this.getPath(<Dir>this.root) + ')';
  }

  private getPath(dir: Dir): string{
    if(dir === this.entry)
      return dir.name;

    for(let entry of dir.members){
      if(entry.type === "member"){
        if(entry === this.entry)
          return dir.name + '.' + entry.name;
      }else if(entry.type === "object"){
        var result = this.getPath(<Dir>entry);
        if(result)
          return dir.name + '.' + result;
      }
    }

    return undefined;
  }

  public remove(i: number): void{
    (<Member>this.entry).compiled.from.values.splice(i, 1);
  }

  public add(): void{
    (<Member>this.entry).compiled.from.values.push({name: "", value: ""});
  }
}
