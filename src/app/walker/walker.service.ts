import { Injectable } from '@angular/core';

declare var acorn: any;

@Injectable()
export class WalkerService {

  constructor() { }
  public search(tree, searched, pattern, depth, perNode, steps){
    console.log("Searching..");
    var result = null;
      
    acorn.walk.fullAncestor(tree, function(node, state, ancestor, type){
      if(result)
        return;
      
      var res = this.searchNode(node, perNode, pattern);
      if(res >= 0){
        
        for(var i = 0; (ancestor.length - steps + (perNode - res) - i) >= 0; i++)
          if(ancestor[ancestor.length - steps + (perNode - res) - i].type){
            result = ancestor[ancestor.length - steps + (perNode - res) - i];
            return;
          }
          
        console.warn("Could not find fitting node");
        if(ancestor.length - steps < 0)
          result = ancestor[0]
        else
          result = ancestor[ancestor.length - steps]
      }
    }.bind(this));
      
    console.log(result);

    if(result){
      var value = {pattern: "", value: "", type: ""};
      this.findValues(result, 0, "", value, searched, pattern, depth);
      this.stripValues(value, result);
      
      console.log("pattern: " + value.pattern);
      console.log("value: " + value.value);
      console.log("type: " + value.type);

      return value;
    }
    
    return undefined;
  }

  private stripValues(value, node){
    var pattern: string[] = value.pattern.split('.');
    var v: string[] = value.value.split('.');

    var lastValidNode = node;
    value.type = node.type;

    while(pattern.length > 0 && v.length > 0 && pattern[0] === v[0]){
      node = node[v[0]];
      pattern.shift();
      v.shift();

      if(node.type){
        value.pattern = pattern.join('.');
        value.value = v.join('.');
        value.type = node.type;
      }
    }
  }

  private findValues(node, i: number, path, result, searched, pattern, depth){
    if(!node)
      return;
    for(var key in node) {
      if(node[key] === searched) {
        result.pattern = path + key;
      } else if(node[key] === pattern) {
        result.value = path + key;
      } else if(i <= depth) {
        this.findValues(node[key], i + 1, path + key + ".", result, searched, pattern, depth);
      }
    }
  }

  private searchNode(n, layers, pattern){
    if(layers < 0)
      return -1;
    
    if(n === pattern)
      return layers;
    
    if(typeof(n) === "function")
      return -1;
    
    for(var key in n){
      var s = this.searchNode(n[key], layers - 1, pattern);
      if(s > -1)
        return s;
    }
    
    return -1;
  }
}
