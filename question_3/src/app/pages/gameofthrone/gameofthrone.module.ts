import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { CharacterComponent } from './character/character.component';
import {CustomFormsModule} from 'ng2-validation';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CKEditorModule} from 'ng2-ckeditor';
import {DirectivesModule} from '../../theme/directives/directives.module';
import {BooksComponent} from './books/books.component';
import {HousesComponent} from './houses/houses.component';
import {CharacterdtlComponent} from './characterdtl/characterdtl.component';

export const routes = [
    { path: '', redirectTo: 'controls', pathMatch: 'full'},
    { path: 'character', component: CharacterComponent, data: { breadcrumb: 'Character' } },
    {path: 'books', component: BooksComponent, data: { breadcrumb: 'Books' } },
    {path: 'houses', component: HousesComponent, data: { breadcrumb: 'Houses' } },
    {path: 'characterdtl', component: CharacterdtlComponent, data: { breadcrumb: 'Details' } }


];

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MultiselectDropdownModule,
      NgbModule,
      CustomFormsModule,
      NgxChartsModule,
      CKEditorModule,
      DirectivesModule,
      NgxPaginationModule,
      PipesModule,
      RouterModule.forChild(routes)
  ],
  declarations: [
    CharacterComponent,
    BooksComponent,
      HousesComponent,
      CharacterdtlComponent
  ]
})
export class GameofthroneModule { }
