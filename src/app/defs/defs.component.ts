import { Member } from '../member.model';
import { Dir } from '../dir.model';
import { Entry, cloneEntry } from '../entry.model';
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
  deleteSource = false;
  tableContent: Entry[] = [];

  @Output() selectedEntry = new EventEmitter<Entry>();
  @Output() selectedRoot = new EventEmitter<Entry>();

  constructor(loader: LoaderService) {
    loader.definition.subscribe(this.displayDefinition.bind(this));
  }

  ngOnInit() {
    document.body.addEventListener('keydown', this.keyDown.bind(this), false);
  }

  public keyDown(e: KeyboardEvent) {
    e = e || <KeyboardEvent>window.event;
    const key = e.which || e.keyCode; // keyCode detection
    const shift = e.shiftKey;

    if (shift) {
      if (key === 67) {// Key C
        this.copyied = this.selected;
        this.deleteSource = false;
      }
      if (key === 88) { // Key X
        this.copyied = this.selected;
        this.deleteSource = true;
      } else if (key === 86) { // V
        let parent: Entry;

        if (this.selected.type === 'object') {
          parent = this.selected;
        } else {
          parent = this.getParent(this.root.value, this.selected);
        }


        if (this.copyied.type === 'object') {
          const co = this.copyied;
          if (co.expanded) {
            this.hide(co);
          }

        }

        const copy: Entry = cloneEntry(this.copyied);

        if (this.deleteSource) {
          this.delete(this.copyied);
          this.copyied = copy;
        }

        if (parent.expanded) {
          this.hide(parent);
        }


        parent.value.children.push(copy);

        this.expand(parent);
      }
    }

  }

  public displayDefinition(entry: Entry): void {
    this.root = entry;
    this.addLayer(entry.value, 0);
    this.selectedRoot.emit(this.root);
    this.tableContent = [this.root];
  }
  private addLayer(obj: Entry, layer: number) {
     if (!layer) {
       layer = 0;
     }
     if (!obj.layer) {
       obj['layer'] = layer;
     }
     const value = obj.value;
     if (value && value.children && value.children.length) {
       value.children.forEach(function(element) {
         this.addLayer(element, layer + 1);
       }.bind(this));
     }
  }
  public click(entry: Entry, event) {
    if (entry.type === 'object') {
      this.toggle(entry);
    }


    this.select(entry);
  }

  private toggle(entry: Entry): void {
    if (entry.expanded) {
      this.hide(entry);
    } else {
      this.expand(entry);
    }
  }

  private expand(entry: Entry): void {
    const index = this.tableContent.indexOf(entry) + 1;
    const members = entry.value.children;
    for (let i = members.length - 1; i >= 0; i--) {
      members[i].layer = (entry.layer || 0) + 1;
      this.tableContent.splice(index, 0, members[i]);
    }
    entry.expanded = true;
  }
  private hide(entry: Entry): void {
    for (const e of entry.value.children) {
      if (e.type === 'object') {
        if (e.expanded) {
          this.hide(e);
        }
      } else {
        if (e === this.selected) {
          this.unselect();
        }
      }
    }

    const index = this.tableContent.indexOf(entry) + 1;

    this.tableContent.splice(index, entry.value.children.length);

    entry.expanded = false;
  }

  public getClasses(entry: Entry): string {
    if (entry.type === 'object') {
      return 'list-group-item list-group-item-action text-white bg-primary';
    }

    if (entry === this.selected) {
      return 'list-group-item list-group-item-action text-white bg-success';
    } else {
      return 'list-group-item list-group-item-action';
    }
  }

  private select(entry: Entry): void {
    this.selected = entry;
    this.selectedEntry.emit(this.selected);
  }

  private unselect(): void {
    this.selected = undefined;
    this.selectedEntry.emit(this.selected);
  }

  public delete(entry: Entry): void {

    if (entry === this.selected) {
      this.unselect();
    }

    // if is a parent and expanded. Hide it
    if (entry.expanded && entry.type === 'object') {
      this.hide(entry);
    }

    let index = this.tableContent.indexOf(entry);
    entry.value.clear();
    this.tableContent.splice(index, 1);
    const parent = this.getParent(this.root, entry);


    if (!parent) {
      return;
    }
    index = parent.value.children.indexOf(entry);
    parent.value.children.splice(index, 1);

    // the last member is selected (if user clicks the last element)
    if (index === parent.value.children.length && index > 0) {
      this.select(parent.value.children[index - 1]);
    } else {
      // otherwise, the children that took the delete def's place
      this.select(parent.value.children[index]);
    }
    if (parent.type === 'object') {
      // if there are no more children. Visually signify it is hidden.
      if (parent.value.children.length === 0) {
        parent.expanded = false;
      }
    }
  }



  private getParent(parent: Entry, searched: Entry): Entry {
    for (const entry of parent.value.children) {
      if (entry === searched) {
        return parent;
      } else if (entry.type === 'object') {
        const result = this.getParent(entry, searched);
        if (result) {
          return result;
        }
      }
    }

    return undefined;
  }

  public create(entry: Entry): void {
    // hide it so it can refresh
    if (entry.expanded) {
      this.toggle(entry);
    }
    const member = new Member(' ',
                              {type: '2', values: []},
                              {
                                type : 'static',
                              });
    const aEntry = {
      type : 'member',
      name : 'undefined',
      layer: entry.layer + 1,
      value : member
    };
    const index = entry.value.children.push(aEntry);
    this.select(aEntry);

    if (!entry.expanded) {
      this.toggle(entry);
    }
  }
}
