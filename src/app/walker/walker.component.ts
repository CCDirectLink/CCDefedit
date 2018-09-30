import { WalkerService } from './walker.service';
import { WalkerCompatService } from '../walker-compat/walker-compat.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoaderService } from '../loader.service';

declare var acorn: any;

@Component({
  selector: 'app-walker',
  templateUrl: './walker.component.html',
  styleUrls: ['./walker.component.css']
})
export class WalkerComponent {
  tree: any;
  treeCompact : any;
  perNode: number = 2;
  steps: number = 5;
  depth: number = 20;
  pattern: string;
  searched: string;

  searching: boolean = false;
  result: {pattern: string, value: string, type: string};

  walker: WalkerService;
  useSnippit = false;
  @Output() resultFound = new EventEmitter<{pattern: string, value: string}>();

  constructor(loader: LoaderService, walker: WalkerService, walkerCompact: WalkerCompatService) {
    this.walker = walker;
    loader.code.subscribe(code => {
      console.log("Parsing..");
      this.tree = acorn.parse(code);
      console.log("Parsed");
    });
    walkerCompact.status.subscribe(newState => {
      this.useSnippit = newState.visible;
      console.log("Just in news: walkerCompact is", newState.visible);
    });
    walkerCompact.code.subscribe(code => {
      // TODO: account for errors
      console.log('Parsing snippit');
      this.treeCompact = acorn.parse(code);
      console.log(this.treeCompact);
      console.log('Parsed!');
    });
  }

  public search(){
	this.result = null;
    this.searching = true;
    var doSearch = async function() {
		this.result = this.walker.search(this.useSnippit ? this.treeCompact : this.tree,
                                     this.searched,
                                     this.pattern,
                                     this.depth,
                                     this.perNode,
                                     this.steps);
		this.searching = false;
	}.bind(this);
    doSearch();


  }
}
