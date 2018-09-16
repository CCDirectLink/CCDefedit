import { Injectable, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';
import { Observable } from 'rxjs/Observable';

const BLACKLIST = ['layer', 'expanded', 'prettyName'];

declare var require: Function;

@Injectable()
export class LoaderService {
  public definition = new EventEmitter<Entry>();
  public definitionNode: Entry;
  public code = new EventEmitter<string>();

  private definitionName: string;
  private fs;

  constructor() {
    if (require) {
      this.fs = require('fs');
    }
   }

  private openFileDialouge(callback, accept?: string) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = callback;
    input.click();
  }

  private readFile(file: File, callback: (data: string) => void) {
    const reader = new FileReader();
    reader.onload = function() {
      callback(reader.result);
    };
    reader.readAsText(file);
    if (file.name.endsWith('.db')) {
      this.definitionName = file.name;
    }
  }
  public createDefinition(): void {
    this.definitionName = 'New File.db';
    this.definitionNode = {
      type : 'object',
      name : 'cc',
      members : [],
      layer: 0
    };
    this.definition.emit(this.definitionNode);
  }
  public openDefinition(): void {
    this.openFileDialouge((ev) =>
      this.readFile(ev.target.files[0], (data: string) => {
        this.definitionNode = JSON.parse(data);
        this.definition.emit(this.definitionNode);
      }),
      '.db');
  }


  public openCode(): void {
    this.openFileDialouge((ev) =>
      this.readFile(ev.target.files[0], (data: string) =>
        this.code.emit(data)
      ),
      '.js');
  }

  public save(): void {
    const content = JSON.stringify(this.definitionNode, (key, value) => BLACKLIST.indexOf(key) < 0 ? value : undefined, 4);

    if (this.fs && this.fs.writeFileSync) {
      this.saveFile(this.definitionName, content);
    } else {
      this.downloadFile(this.definitionName, content);
    }
  }

  private downloadFile(name: string, content: string): void {
    const blob = new Blob([content], {type: 'application/json'});
    const  url = window.URL.createObjectURL(blob);


    const a = document.createElement('a');
    a.href = url;
	console.log(url, name);
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private saveFile(name: string, content: string): void {
    console.log(content);
    this.fs.writeFileSync(name, content);
  }
}
