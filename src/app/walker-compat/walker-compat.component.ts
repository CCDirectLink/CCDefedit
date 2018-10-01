import { Component, OnInit, OnDestroy } from '@angular/core';
import { WalkerCompatService } from '../walker-compat/walker-compat.service';
@Component({
  selector: 'app-walker-compat',
  templateUrl: './walker-compat.component.html',
  styleUrls: ['./walker-compat.component.css']
})
export class WalkerCompatComponent implements OnInit , OnDestroy {
  rawStringCode = '';
  private service: WalkerCompatService;
  constructor(walkerCompatService: WalkerCompatService) {
    this.service = walkerCompatService;
  }
  ngOnInit() {
    this.service.status.emit({
      visible : true
    });
  }
  onInput(code: any) {
    this.rawStringCode = code;
  }
  onLoadClick() {
    this.service.code.emit(this.rawStringCode);
  }
  ngOnDestroy() {
    this.service.status.emit({
      visible : false
    });
  }

}
