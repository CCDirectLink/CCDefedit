import { WalkerService } from './walker.service';
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

  perNode: number = 2;
  steps: number = 5;
  depth: number = 20;
  pattern: string;
  searched: string;

  searching: boolean = false;
  result: {pattern: string, value: string, type: string};

  walker: WalkerService

  @Output() resultFound = new EventEmitter<{pattern: string, value: string}>();

  constructor(loader: LoaderService, walker: WalkerService) {
    this.walker = walker;
    loader.code.subscribe(code => {
      console.log("Parsing..");
      this.tree = acorn.parse(code);
      console.log("Parsed");
    })
  }
  
  public search(){
    this.searching = true;

    this.result = this.walker.search(this.tree, this.searched, this.pattern, this.depth, this.perNode, this.steps);

    this.searching = false;
  }
}
