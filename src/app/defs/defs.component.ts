import { Member } from '../member.model';
import { Dir } from '../dir.model';
import { Entry } from '../entry.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-defs',
  templateUrl: './defs.component.html',
  styleUrls: ['./defs.component.css']
})
export class DefsComponent implements OnInit {
  root: Entry;
  selected: Entry;
  tableContent: Entry[] = [];

  @Output() selectedEntry = new EventEmitter<Entry>();
  @Output() selectedRoot = new EventEmitter<Entry>();

  constructor(loader: LoaderService){
    loader.definition.subscribe(this.displayDefintion.bind(this));
  }

  ngOnInit() {
  }

  public displayDefintion(entry: Entry) : void{
    this.root = entry;
    this.selectedRoot.emit(this.root);
    this.tableContent = [this.root];
  }

  public click(entry: Entry){
    if(entry.type === "object")
      this.toggle(<Dir>entry);
    
      
    this.select(entry);
  }

  private toggle(entry: Dir) : void{
    if(entry.expanded)
      this.hide(entry);
    else
      this.expand(entry);
  }

  private expand(entry: Dir): void{
    var index = this.tableContent.indexOf(entry) + 1;
    var members = entry.members;
    for(var i = members.length - 1; i >= 0; i--){
      members[i].layer = (entry.layer | 0) + 1;
      this.tableContent.splice(index, 0, members[i]);
    }
    entry.expanded = true;
  }
  private hide(entry: Dir): void{
    for(let e of entry.members){
      if(e.type === 'object'){
        if((<Dir>e).expanded)
          this.hide(<Dir>e);
      } else {
        if(e === this.selected)
          this.select(e);
      }
    }

    var index = this.tableContent.indexOf(entry) + 1;
    
    this.tableContent.splice(index, entry.members.length);
    
    entry.expanded = false;
  }

  public getClasses(entry: Entry): string{
    if(entry.type === "object")
      return "list-group-item list-group-item-action text-white bg-primary"

    if(entry === this.selected)
      return "list-group-item list-group-item-action text-white bg-success";
    else
      return "list-group-item list-group-item-action";
  }

  private select(entry: Entry): void{
    if(entry == this.selected)
      this.selected = undefined;
    else
      this.selected = entry;
    
    this.selectedEntry.emit(this.selected);
  }

  public delete(entry: Entry): void{
    if(entry.type === 'object')
      this.hide(<Dir>entry);

    var index = this.tableContent.indexOf(entry);
    this.tableContent.splice(index, 1);

    var parent = this.getParent(<Dir>this.root, entry);

    index = parent.members.indexOf(entry);
    parent.members.splice(index, 1);
  }

  

  private getParent(node: Dir, searched: Entry): Dir{
    for(let entry of node.members){
      if(entry.type === "member"){
        if(entry === searched)
          return node;
      }else if(entry.type === "object"){
        var result = this.getParent(<Dir>entry, searched);
        if(result)
          return result;
      }
    }

    return undefined;
  }

  public create(entry: Dir): void{
    this.toggle(entry);

    var index = entry.members.push(new Member('member', 'raw', '', '', {pattern: '', from:{type:'', values: []}}));

    this.select(entry.members[index]);
  }
}
