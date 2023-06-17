import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from "../shared/shared.module";
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatCardModule
    ]
})
export class PagesModule { }
