import { Injectable, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';
import { Observable } from 'rxjs/Observable';

const BLACKLIST = ["layer", "expanded"];

declare var require: Function;

@Injectable()
export class LoaderService {
  public definition = new EventEmitter<Entry>();
  public definitionNode: Entry;
  public code = new EventEmitter<string>();

  private definitionName: string;
  private fs;

  constructor() {
    if(require){
      this.fs = require('fs');
    }
   }

  private openFileDialouge(callback, accept?: string){
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = callback;
    input.click();    
  }

  private readFile(file: File, callback: (data: string) => void){
    var reader = new FileReader();
    reader.onload = function(){
      callback(reader.result);
    };
    reader.readAsText(file);
    this.definitionName = file.name;
  }

  public openDefinition(): void{
    this.openFileDialouge((ev) => 
      this.readFile(ev.target.files[0], (data: string) =>{
        this.definitionNode = JSON.parse(data);
        this.definition.emit(this.definitionNode);
      }), 
      '.db');
  }


  public openCode(): void{
    this.openFileDialouge((ev) => 
      this.readFile(ev.target.files[0], (data: string) =>
        this.code.emit(data)
      ), 
      '.js');
  }

  public save(): void{
    var content = JSON.stringify(this.definitionNode, (key, value) => BLACKLIST.indexOf(key) < 0 ? value : undefined, 4);

    if(this.fs && this.fs.writeFileSync)
      this.saveFile(this.definitionName, content);
    else
      this.downloadFile(this.definitionName, content);
  }

  private downloadFile(name: string, content: string): void{
    var blob = new Blob([content], {type: 'application/json'});
    var url = window.URL.createObjectURL(blob);


    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private saveFile(name: string, content: string): void{
    this.fs.writeFileSync(name, content);
  }
}
