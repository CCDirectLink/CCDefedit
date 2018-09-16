import { Component } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: Entry;
  root: Entry;
  saveEnabled = false;

  public select(entry: Entry): void {
    this.selected = entry;
  }
  public selectRoot(entry: Entry): void {
    this.root = entry;
    this.saveEnabled = true;
  }
}
