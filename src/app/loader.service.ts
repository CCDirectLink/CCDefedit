import { Injectable, EventEmitter } from '@angular/core';
import {
  ConvertFromOldDefJson,
  Entry,
  CreateEntry,
  ConvertEntryToDefJson,
  cloneEntry,
  MergeEntries,
  convert2
} from './entry.model';
import { Dir} from './dir.model';
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
      layer : 0,
      expanded : false,
      value : new Dir('object', 'cc')
    };
    this.definition.emit(this.definitionNode);
  }
  public loadDefinition(data): any {
    let definitionFile = JSON.parse(data);

    // convert to v2
    if (definitionFile.members) {
      console.clear();
      console.log('v1 -> v2');
      console.log('Old file', definitionFile);
      definitionFile = ConvertFromOldDefJson(definitionFile);
      console.log('New file', definitionFile);
    }
    // convert to v3
    if (Array.isArray(definitionFile.entries)) {
      console.log('v2 -> v3');
      definitionFile.entries = convert2(definitionFile.entries);
      console.log(definitionFile);
    }
    return CreateEntry(definitionFile.tree, definitionFile.entries);
  }
  public mergeDefinitions(): void {
    this.openFileDialouge((ev) =>
      this.readFile(ev.target.files[0], (data: string) => {
        const inDefNode = this.loadDefinition(data);
        const oldDefNode = this.definitionNode;
        // MergeEntries(oldDefNode, inDefNode);
        // this.definition.emit(this.definitionNode);
      }),
      '.db');
  }
  public openDefinition(): void {
    this.openFileDialouge((ev) =>
      this.readFile(ev.target.files[0], (data: string) => {
        this.definitionNode = this.loadDefinition(data);
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
    // const content = JSON.stringify(this.definitionNode, (key, value) => BLACKLIST.indexOf(key) < 0 ? value : undefined, 4);
    let output = <any>{};
    const clone = cloneEntry(this.definitionNode);
    ConvertEntryToDefJson(clone, output);
    const entries = Object.keys(output.entries)
                   .sort()
                   .reduce((obj, value, index, arr) => {
                     obj[value] = output.entries[value];
                     return obj;
                   }, {});
    output.entries = entries;
    output = JSON.stringify(output);
    if (this.fs && this.fs.writeFileSync) {
      this.saveFile(this.definitionName, output);
    } else {
      this.downloadFile(this.definitionName, output);
    }
  }

  private downloadFile(name: string, content: string): void {
    const blob = new Blob([content], {type: 'application/json'});
    const  url = window.URL.createObjectURL(blob);


    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private saveFile(name: string, content: string): void {
    this.fs.writeFileSync(name, content);
  }
}
