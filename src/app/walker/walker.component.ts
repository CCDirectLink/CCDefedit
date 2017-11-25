import { Component, OnInit, Output, EventEmitter, EventEmitter } from '@angular/core';
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
  result: {pattern: string, value: string};

  @Output() resultFound = new EventEmitter<{pattern: string, value: string}>();

  constructor(loader: LoaderService) {
    loader.code.subscribe(code => {
      console.log("Parsing..");
      this.tree = acorn.parse(code);
      console.log("Parsed");
    })
  }

  private search(): void{
    this.searching = true;
    console.log("Searching..");
    var result = null;
      
    acorn.walk.fullAncestor(this.tree, function(node, state, ancestor, type){
      if(result)
        return;
      
      var res = this.searchNode(node, this.perNode);
      if(res >= 0){
        
        for(var i = 0; (ancestor.length - this.steps + (this.perNode - res) - i) >= 0; i++)
          if(ancestor[ancestor.length - this.steps + (this.perNode - res) - i].type){
            result = ancestor[ancestor.length - this.steps + (this.perNode - res) - i];
            return;
          }
          
        console.warn("Could not find fitting node");
        if(ancestor.length - this.steps < 0)
          result = ancestor[0]
        else
          result = ancestor[ancestor.length - this.steps]
      }
    }.bind(this));
      
    console.log(result);

    if(result){
      this.result = {pattern: "", value: ""};
      this.findValues(result, 0, "", this.result);
      
      console.log("pattern: " + this.result.pattern);
      console.log("value: " + this.result.value);

      this.resultFound.emit(this.result);
    }
    
    this.searching = false;
  }

  private findValues(node, i: number, path, result){
    if(!node)
      return;
    for(var key in node) {
      if(node[key] === this.searched) {
        result.pattern = path + key;
      } else if(node[key] === this.pattern) {
        result.value = path + key;
      } else if(i <= this.depth) {
        this.findValues(node[key], i + 1, path + key + ".", result);
      }
    }
  }

  private searchNode(n, layers){
    if(layers < 0)
      return -1;
    
    if(n === this.pattern)
      return layers;
    
    if(typeof(n) === "function")
      return -1;
    
    for(var key in n){
      var s = this.searchNode(n[key], layers - 1);
      if(s > -1)
        return s;
    }
    
    return -1;
  }
}
