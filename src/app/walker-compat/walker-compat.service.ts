import { Injectable , EventEmitter} from '@angular/core';
@Injectable()
export class WalkerCompatService {
  code  = new EventEmitter<string>();
  status = new EventEmitter<object>();
  constructor() {

  }
}
