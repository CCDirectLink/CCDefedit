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
  copyied: Entry;
  deleteSource: boolean = false;
  tableContent: Entry[] = [];

  @Output() selectedEntry = new EventEmitter<Entry>();
  @Output() selectedRoot = new EventEmitter<Entry>();

  constructor(loader: LoaderService){
    loader.definition.subscribe(this.displayDefintion.bind(this));
  }

  ngOnInit() {
    document.body.addEventListener("keydown", this.keyDown.bind(this), false);
  }

  public keyDown(e: KeyboardEvent){
    e = e || <KeyboardEvent>window.event;
    var key = e.which || e.keyCode; // keyCode detection
    var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection
    
    if (key == 67 && ctrl) {
      this.copyied = this.selected;
      this.deleteSource = false;
    } 
    if (key == 88 && ctrl) {
      this.copyied = this.selected;
      this.deleteSource = true;
    }else if (key == 86 && ctrl) {
      var parent: Dir;

      if(this.selected.type === 'object')
        parent = <Dir>this.selected;
      else
        parent = this.getParent(<Dir>this.root, this.selected);

      if(this.copyied.type === 'object'){
        var co = <Dir>this.copyied;
        if(co.expanded)
          this.hide(co);
      }

      var copy: Entry = JSON.parse(JSON.stringify(this.copyied));

      if(this.deleteSource){
        this.delete(this.copyied);
        this.copyied = copy;
      }

      if(parent.expanded)
        this.hide(parent);

      parent.members.push(copy);

      this.expand(parent);
    }
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
          this.unselect();
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
    this.selected = entry;
    this.selectedEntry.emit(this.selected);
  }

  private unselect(): void{
    this.selected = undefined;
    this.selectedEntry.emit(this.selected);
  }

  public delete(entry: Entry): void{
    if(entry.type === 'object')
      this.hide(<Dir>entry);

    if(entry === this.selected)
      this.unselect();

    var index = this.tableContent.indexOf(entry);
    this.tableContent.splice(index, 1);

    var parent = this.getParent(<Dir>this.root, entry);

    index = parent.members.indexOf(entry);
    parent.members.splice(index, 1);
  }

  

  private getParent(node: Dir, searched: Entry): Dir{
    for(let entry of node.members){
      if(entry === searched)
        return node;
      else if(entry.type === "object"){
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

    this.select(entry.members[index - 1]);
  }
}
