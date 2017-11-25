import { Injectable, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {
  public definition = new EventEmitter<Entry>();
  public code = new EventEmitter<string>();

  constructor() { }

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
  }

  public openDefinition(): void{
    this.openFileDialouge((ev) => 
      this.readFile(ev.target.files[0], (data: string) =>
        this.definition.emit(JSON.parse(data))
      ), 
      '.db');
  }


  public openCode(): void{
    this.openFileDialouge((ev) => 
      this.readFile(ev.target.files[0], (data: string) =>
        this.code.emit(data)
      ), 
      '.js');
  }
}
