import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefsComponent } from './defs/defs.component';
import { DirComponent } from './defs/dir/dir.component';
import { MemberComponent } from './defs/member/member.component';
import { LoaderService } from './loader.service';
import { EditorComponent } from './editor/editor.component';
import { WalkerComponent } from './walker/walker.component';
import { WalkerService } from './walker/walker.service';
import { WalkerCompatComponent } from './walker-compat/walker-compat.component';
import { WalkerCompatService } from './walker-compat/walker-compat.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DefsComponent,
    DirComponent,
    MemberComponent,
    EditorComponent,
    WalkerComponent,
    WalkerCompatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoaderService, WalkerService, WalkerCompatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
