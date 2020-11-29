import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardCustomComponent } from './components/card-custom/card-custom.component';
import { ReviewChangesTableComponent } from './components/review-changes-table/review-changes-table.component';
import {ComponentLoaderService} from './common/services/component-loader.service';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { GreactiveFormComponent } from './components/greactive-form/greactive-form.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { CategoriesService } from './common/services/northwind.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardCustomComponent,
    ReviewChangesTableComponent,
    ProfileCardComponent,
    TreeListComponent,
    GreactiveFormComponent,
    GridViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeListModule,
    GridModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ComponentLoaderService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
