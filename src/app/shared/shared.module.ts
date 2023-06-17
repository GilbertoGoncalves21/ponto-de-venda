import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdvHeaderComponent } from './pdv-header/pdv-header.component';
import { PdvCommandsComponent } from './pdv-commands/pdv-commands.component';
import { PdvBoxFrontComponent } from './pdv-box-front/pdv-box-front.component';

@NgModule({
  declarations: [
    PdvHeaderComponent,
    PdvCommandsComponent,
    PdvBoxFrontComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PdvHeaderComponent,
    PdvCommandsComponent,
    PdvBoxFrontComponent
  ]
})
export class SharedModule { }
