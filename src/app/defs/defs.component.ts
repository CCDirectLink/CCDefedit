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
  deleteSource = false;
  tableContent: Entry[] = [];

  @Output() selectedEntry = new EventEmitter<Entry>();
  @Output() selectedRoot = new EventEmitter<Entry>();

  constructor(loader: LoaderService) {
    loader.definition.subscribe(this.displayDefintion.bind(this));
  }

  ngOnInit() {
    document.body.addEventListener('keydown', this.keyDown.bind(this), false);
  }

  public keyDown(e: KeyboardEvent) {
    e = e || <KeyboardEvent>window.event;
    const key = e.which || e.keyCode; // keyCode detection
    const shift = e.shiftKey;

    if (shift) {
      if (key === 67) {
        this.copyied = this.selected;
        this.deleteSource = false;
      }
      if (key === 88) {
        this.copyied = this.selected;
        this.deleteSource = true;
      } else if (key === 86) {
        let parent: Dir;

        if (this.selected.type === 'object') {
          parent = <Dir>this.selected;
        } else {
          parent = this.getParent(<Dir>this.root, this.selected);
        }


        if (this.copyied.type === 'object') {
          const co = <Dir>this.copyied;
          if (co.expanded) {
            this.hide(co);
          }

        }

        const copy: Entry = JSON.parse(JSON.stringify(this.copyied));

        if (this.deleteSource) {
          this.delete(this.copyied);
          this.copyied = copy;
        }

        if (parent.expanded) {
          this.hide(parent);
        }


        parent.members.push(copy);

        this.expand(parent);
      }
    }

  }

  public displayDefintion(entry: Entry): void {
    this.root = entry;
    this.addLayer(entry, 0);
    this.selectedRoot.emit(this.root);
    this.tableContent = [this.root];
  }
  private addLayer(obj, layer: number) {
     if (!layer) {
       layer = 0;
     }
     if (!obj.layer) {
       obj['layer'] = layer;
     }
     if (obj.members && obj.members.length) {
       obj.members.forEach(function(element) {
         this.addLayer(element, layer + 1);
       }.bind(this));
     }
  }
  public click(entry: Entry, event) {
    if (entry.type === 'object') {
      this.toggle(<Dir>entry);
    }


    this.select(entry);
  }

  private toggle(entry: Dir): void {
    if (entry.expanded) {
      this.hide(entry);
    } else {
      this.expand(entry);
    }
  }

  private expand(entry: Dir): void {
    const index = this.tableContent.indexOf(entry) + 1;
    const members = entry.members;
    for (let i = members.length - 1; i >= 0; i--) {
      members[i].layer = (entry.layer || 0) + 1;
      this.tableContent.splice(index, 0, members[i]);
    }
    entry.expanded = true;
  }
  private hide(entry: Dir): void {
    for (const e of entry.members) {
      if (e.type === 'object') {
        if ((<Dir>e).expanded) {
          this.hide(<Dir>e);
        }
      } else {
        if (e === this.selected) {
          console.log(this.selected);
          this.unselect();
        }
      }
    }

    const index = this.tableContent.indexOf(entry) + 1;

    this.tableContent.splice(index, entry.members.length);

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
    if ((<Dir> entry).expanded && entry.type === 'object') {
      this.hide(<Dir>entry);
    }

    let index = this.tableContent.indexOf(entry);
    this.tableContent.splice(index, 1);
    const parent = this.getParent(<Dir>this.root, entry);



    if (!parent) {
      return;
    }
    index = parent.members.indexOf(entry);
    parent.members.splice(index, 1);

    // the last member is selected (if user clicks the last element)
    if (index === parent.members.length && index > 0) {
      this.select(parent.members[index - 1]);
    } else {
      // otherwise, the element that took the delete def's place
      this.select(parent.members[index]);
    }
    if (parent.type === 'object') {
      // if there are no more children. Visually signify it is hidden.
      if (parent.members.length === 0) {
        parent.expanded = false;
      }
    }
  }



  private getParent(node: Dir, searched: Entry): Dir {
    for (const entry of node.members) {
      if (entry === searched) {
        return node;
      } else if (entry.type === 'object') {
        const result = this.getParent(<Dir>entry, searched);
        if (result) {
          return result;
        }
      }
    }

    return undefined;
  }

  public create(entry: Dir): void {
    // hide it so it can refresh
    if (entry.expanded) {
      this.toggle(entry);
    }
    let member = new Member('member',  // type
                              'raw', // refType
                              'undefined',  // name
                              '', // parent
                              {pattern: '', from: {type: '', values: []}}, // compiled
                              entry.layer + 1); // layer
    const index = entry.members.push(member);
    this.select(member);

    if (!entry.expanded) {
      this.toggle(entry);
    }
  }
}
