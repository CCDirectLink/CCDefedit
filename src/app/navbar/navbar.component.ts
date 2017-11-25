import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loader: LoaderService;
  @Input() saveEnabled: boolean = false;

  constructor(loader: LoaderService) {
    this.loader = loader;
  }

  ngOnInit() {
  }


  public openDefinition(){
    this.loader.openDefinition();
  }

  public openCode(){
    this.loader.openCode();
  }

  public save(){
    if(this.saveEnabled)
      this.loader.save();
  }
}
