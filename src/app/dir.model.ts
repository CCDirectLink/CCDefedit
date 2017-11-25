import { Member } from "./member.model";
import { Entry } from "./entry.model";

export class Dir implements Entry{
  constructor(
      public type: string,
      public name: string,
      public members: Entry[],
      public layer: number = 0,
      public expanded: boolean = false
  ){}
}